import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "my-first-mcp",
  version: "0.1.0",
});

server.registerTool(
  "greet",
  {
    title: "Greet",
    description: "Say hello to someone by name",
    inputSchema: z.object({
        fullname: z
          .string()
          .regex(/^[A-Za-z]+(?:\s+[A-Za-z]+){3}$/, "Please enter your full name (4 words).")
          .describe("Enter your full name (first, middle, father's, and family name)"),
      }),
  },
  async ({ fullname }) => {
    return {
      content: [
        {
          type: "text",
          text: `Hello, ${fullname}!`,
        },
      ],
    };
  }
);
server.registerTool(
  "introduce_me",
  {
    title: "Introduce Me",
    description: "Introduce the creator of this MCP server",
    inputSchema: z.object({}),
  },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: "Hello! My name is Tala Ahmad Saleh Saabneh, and I created this MCP server.",
        },
      ],
    };
  }
);
server.registerTool(
    "shout_name",
    {
      title: "Shout Name",
      description: "Display a full name in uppercase.",
      inputSchema: z.object({
        fullName: z
          .string()
          .regex(
            /^[A-Za-z]+(?:\s+[A-Za-z]+){3}$/,
            "Please enter a valid full name (4 words)."
          )
          .describe("Enter your full name (4 words)"),
      }),
    },
    async ({ fullName }) => {
      return {
        content: [
          {
            type: "text",
            text: ` ${fullName.toUpperCase()}!`,
          },
        ],
      };
    }
  );
const transport = new StdioServerTransport();

await server.connect(transport);