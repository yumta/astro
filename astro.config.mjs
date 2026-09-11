// @ts-check
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  site: "https://example.com",
  server: {
    port: 4321,
  },
  env: {
    schema: {
      API_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
});
