using System.Net.WebSockets;

namespace Giger.Connections.SocketsManagment
{
    internal class SocketMiddleware
    {
        private readonly RequestDelegate _next;

        public SocketMiddleware(RequestDelegate next, SocketHandler handler)
        {
            _next = next;
            Handler = handler;
        }

        private SocketHandler Handler { get; set; }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                if (!context.WebSockets.IsWebSocketRequest)
                    return;

                var socket = await context.WebSockets.AcceptWebSocketAsync();

                await Handler.OnConnected(socket, context);
                await Receive(socket, async (result, buffer) =>
                {
                    if (result.MessageType == WebSocketMessageType.Text)
                    {
                        await Handler.ReceiveAsync(socket, result, buffer);
                    }
                    else if (result.MessageType == WebSocketMessageType.Close)
                    {
                        await Handler.OnDisconnected(socket);
                    }
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }

        private async Task Receive(WebSocket socket, Action<WebSocketReceiveResult, byte[]> messageHandler)
        {
            try
            {
                var buffer = new byte[1024 * 4];
                while (socket.State == WebSocketState.Open)
                {
                    var result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                    messageHandler(result, buffer);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}