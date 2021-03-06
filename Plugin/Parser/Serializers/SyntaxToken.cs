﻿using System;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Plugin.Parser.Utils;

namespace Plugin.Parser.Serializers
{
    public class SyntaxTokenSerializer : JsonConverter<SyntaxToken>
    {
        public override SyntaxToken Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            throw new NotImplementedException();
        }

        public sealed override void Write(Utf8JsonWriter writer, SyntaxToken value, JsonSerializerOptions options)
        {
            writer.WriteStartObject();

            writer.WriteString("nodeType", "Token");
            writer.WriteString("text", value.Text);
            writer.WriteString("kind", value.Kind().ToString());

            writer.WriteSerializedValueOrNull(
                "leadingTrivia",
                value.LeadingTrivia.Where(trivia => !trivia.IsKind(SyntaxKind.WhitespaceTrivia)),
                options
            );

            writer.WriteSerializedValueOrNull(
                "trailingTrivia",
                value.TrailingTrivia.Where(trivia => !trivia.IsKind(SyntaxKind.WhitespaceTrivia)),
                options
            );

            writer.WriteEndObject();
        }
    }
}