import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  timeout: 60_000,
  use: {
    baseURL: process.env.APP_URL || "http://127.0.0.1:3200",
    headless: true,
  },
  webServer: {
    command: "node scripts/serve-out.mjs",
    url: "http://127.0.0.1:3200",
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
