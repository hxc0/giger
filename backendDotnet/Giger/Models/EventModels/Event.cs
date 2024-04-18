﻿using Giger.Models.Obscured;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace Giger.Models.EventModels
{
    public abstract class Event : ObscurableInfo
    {
        public string EventDescription { get; set; }

        [BsonRepresentation(BsonType.String)]
        public EventStatus Status { get; set; }
        
        public DateTime TimeStamp { get; set; }
        
        public string Name { get; set; }
    }

    [JsonConverter(typeof(JsonStringEnumConverter<EventStatus>))]
    public enum EventStatus
    {
        CURRENT,
        HISTORICAL
    }
}