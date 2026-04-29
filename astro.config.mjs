// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  server: {
    host: true,
    allowedHosts: true,
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
});
