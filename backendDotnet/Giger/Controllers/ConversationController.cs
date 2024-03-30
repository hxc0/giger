﻿using Microsoft.AspNetCore.Mvc;
using Giger.Services;
using Giger.Models.MessageModels;

namespace Giger.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConversationController(UserService userService, LoginService loginService, ConversationService conversationService) : AuthController(userService, loginService)

    {
        private readonly ConversationService _conversationService = conversationService;

        [HttpGet]
        public async Task<List<Conversation>> Get() => await _conversationService.GetAllAsync();

        [HttpGet("id")]
        public async Task<ActionResult<Conversation>> Get(string id)
        {
            var conversation = await _conversationService.GetAsync(id);
            if (conversation is null)
            {
                return NotFound();
            }

            return conversation;
        }

        [HttpGet("byOwner")]
        public async Task<List<Conversation>> GetAllConversationOfParticipant(string owner) => await _conversationService.GetAllWithParticipantAsync(owner);

        [HttpPost]
        public async Task<IActionResult> Post(Conversation newConversation)
        {
            await _conversationService.CreateAsync(newConversation);

            return CreatedAtAction(nameof(Get), new { id = newConversation.Id }, newConversation);
        }

        [HttpPut("id")]
        public async Task<IActionResult> Update(string id, Conversation updatedConversation)
        {
            var conversation = await _conversationService.GetAsync(id);

            if (conversation is null)
            {
                return NotFound();
            }

            updatedConversation.Id = conversation.Id;

            await _conversationService.UpdateAsync(id, updatedConversation);

            return NoContent();
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(string id)
        {
            var conversation = await _conversationService.GetAsync(id);

            if (conversation is null)
            {
                return NotFound();
            }

            await _conversationService.RemoveAsync(id);

            return NoContent();
        }
    }
}