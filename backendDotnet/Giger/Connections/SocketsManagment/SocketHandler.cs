using System.Net.WebSockets;
using System.Text;

namespace Giger.Connections.SocketsManagment
{
    public abstract class SocketHandler
    {
        public ConnectionsManager Connections { get; set; }

        public SocketHandler(ConnectionsManager connections)
        {
            Connections ??= connections;
        }

        public virtual async Task OnConnected(WebSocket socket, HttpContext context)
        {
            try
            {
                context.Request.Query.TryGetValue("AuthToken", out var token);
                if (string.IsNullOrEmpty(token))
                {
                    await socket.CloseAsync(WebSocketCloseStatus.PolicyViolation, "No token", CancellationToken.None);
                    return;
                }
                await Task.Run(() => { Connections.AddSocket(socket, token); });
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public virtual async Task OnDisconnected(WebSocket socket)
        {
            try
            {
                await Connections.RemoveConnectionAsync(Connections.GetUserId(socket));
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task SendMessageAsync(WebSocket socket, string message)
        {
            try
            {
                if (socket.State != WebSocketState.Open)
                    return;

                var bytes = Encoding.UTF8.GetBytes(message);
                var buffer = new ArraySegment<byte>(bytes, 0, message.Length);
                await socket.SendAsync(buffer, WebSocketMessageType.Text, true, CancellationToken.None);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task SendMessageAsync(string username, string message)
        {
            try
            {
                var socket = Connections.GetSocketByUser(username);
                if (socket != null)
                    await SendMessageAsync(socket, message);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task SendMessageToParticipantsAsync(string message, IEnumerable<string> participants)
        {
            try
            {
                foreach (var socket in Connections.GetParticipants(participants))
                {
                    if (socket.State == WebSocketState.Open)
                    {
                        await SendMessageAsync(socket, message);
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task SendMessageToAllAsync(string message)
        {
            try
            {
                foreach (var pair in Connections.GetAllConnections())
                {
                    if (pair.Value.State == WebSocketState.Open)
                    {
                        await SendMessageAsync(pair.Value, message);
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public abstract Task ReceiveAsync(WebSocket socket, WebSocketReceiveResult result, byte[] buffer);
    }
}
