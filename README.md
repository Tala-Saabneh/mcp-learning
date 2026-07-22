# My First MCP Server

This repository contains my first Model Context Protocol (MCP) server built using the TypeScript SDK.

The goal of this project is to create and test custom MCP tools, validate user inputs, and interact with the server using MCP Inspector.

---

## Project Features

This MCP server provides three custom tools:

### 1. greet Tool

A personalized greeting tool that accepts a user's name and returns a greeting message.

Example:

Input:
```
name: "Tala Ahmad Saleh Saabneh"
```

Output:
```
Hello, Tala Ahmad Saleh Saabneh!
```

The tool uses Zod schema validation to ensure that the input is a valid string before execution.

---

### 2. introduce_me Tool

A custom tool that introduces the creator of this MCP server.

Example Output:

```
Hello! My name is Tala Ahmad Saleh Saabneh, and I created this MCP server.
```

This tool does not require input parameters and demonstrates a simple MCP tool response.

---

### 3. shout_name Tool

A validation-based tool that receives a four-word full name and returns it in uppercase format.

Example:

Input:
```
fullName:
Tala Ahmad Saleh Saabneh
```

Output:

```
TALA AHMAD SALEH SAABNEH!
```

The input is validated using a Zod regular expression schema to ensure that the provided name follows the required format.

---

# Technologies Used

- Node.js
- TypeScript
- Model Context Protocol (MCP) TypeScript SDK
- Zod (Input Validation)
- MCP Inspector
- tsx

---

# Work Steps

## 1. Running the MCP Server

First, I verified that the MCP server was working correctly by running:

```bash
npm run dev
```

The server was kept running in the terminal because MCP Inspector requires an active server connection.

---

## 2. Launching MCP Inspector

A second terminal was opened in the same project directory, and MCP Inspector was launched using:

```bash
npx @modelcontextprotocol/inspector npx tsx src/index.ts
```

After starting, Inspector generated a local URL that was opened in the browser.

---

## 3. Connecting MCP Inspector

Inside MCP Inspector:

- Transport type was kept as **STDIO**
- Command was set to:

```
npx
```

- Arguments were set to:

```
tsx src/index.ts
```

After clicking **Connect**, MCP Inspector successfully connected to the MCP server.

---

## 4. Testing Available Tools

The Tools tab displayed all available tools registered in the server:

- `greet`
- `introduce_me`
- `shout_name`

Each tool was executed successfully through MCP Inspector.

---

## 5. Testing greet Tool

The `greet` tool was tested using:

```
name: "Tala Ahmad Saleh Saabneh"
```

The server successfully returned:

```
Hello, Tala Ahmad Saleh Saabneh!
```

---

## 6. Testing introduce_me Tool

The `introduce_me` tool was executed without parameters.

The returned message was:

```
Hello! My name is Tala Ahmad Saleh Saabneh, and I created this MCP server.
```

---

## 7. Testing shout_name Tool

The `shout_name` tool was tested using:

```
fullName:
Tala Ahmad Saleh Saabneh
```

The tool successfully returned:

```
TALA AHMAD SALEH SAABNEH!
```

---

# Input Validation Testing

To verify that input validation was correctly implemented, an invalid request was intentionally submitted to the `greet` tool by leaving the required `name` field empty.

The request was rejected before reaching the tool handler.

MCP Inspector displayed:

```
MCP error -32602: Input validation error
Invalid input: expected string, received undefined
```

This confirms that Zod successfully validated the input schema and prevented invalid data from reaching the tool implementation.

---

# Project Structure

```
MCP-Learning/
│
├── src/
│   └── index.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

# Testing Evidence

The repository submission includes MCP Inspector screenshots showing:

- Available tools list
- Successful execution of `greet`
- Successful execution of `introduce_me`
- Successful execution of `shout_name`
- Input validation error test

---

# Author

**Tala Ahmad Saleh Saabneh**

## Academy

This project was developed as part of the MCP learning journey through [NextFlows Academy](https://nextflows.ai/academy).
