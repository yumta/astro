// @ts-check
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  server: {
    port: 3000,
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
