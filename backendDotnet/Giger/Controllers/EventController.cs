﻿using Microsoft.AspNetCore.Mvc;
using Giger.Services;
using Giger.Models.EventModels;

namespace Giger.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        private readonly EventService _gigerEventService;

        public EventController(EventService gigerEventService) => _gigerEventService = gigerEventService;

        [HttpGet]
        public async Task<List<Event>> Get() => await _gigerEventService.GetAllAsync();

        [HttpGet("id")]
        public async Task<ActionResult<Event>> Get(int id)
        {
            var gigerEvent = await _gigerEventService.GetAsync(id);
            if (gigerEvent is null)
            {
                return NotFound();
            }

            return gigerEvent;
        }

        [HttpGet("byName")]
        public async Task<ActionResult<Event>> GetOwner(string name)
        {
            var gigerEvent = await _gigerEventService.GetByFirstNameAsync(name);
            if (gigerEvent is null)
            {
                return NotFound();
            }

            return gigerEvent;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Event newEvent)
        {
            await _gigerEventService.CreateAsync(newEvent);

            return CreatedAtAction(nameof(Get), new { id = newEvent.Id }, newEvent);
        }

        [HttpPut("id")]
        public async Task<IActionResult> Update(int id, Event updatedEvent)
        {
            var gigerEvent = await _gigerEventService.GetAsync(id);

            if (gigerEvent is null)
            {
                return NotFound();
            }

            updatedEvent.Id = gigerEvent.Id;

            await _gigerEventService.UpdateAsync(id, updatedEvent);

            return NoContent();
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            var gigerEvent = await _gigerEventService.GetAsync(id);

            if (gigerEvent is null)
            {
                return NotFound();
            }

            await _gigerEventService.RemoveAsync(id);

            return NoContent();
        }
    }
}