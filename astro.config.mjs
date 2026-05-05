// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://doctor.vpname.cc",
  server: {
    host: true,
    allowedHosts: true,
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
});
