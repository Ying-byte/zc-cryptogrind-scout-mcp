#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "cryptogrind",
  boardId: "cryptogrind-official",
  domain: "cryptogrind.com",
  npmName: "zc-cryptogrind-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
