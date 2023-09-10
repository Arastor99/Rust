import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginRadar } from "vite-plugin-radar";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      // Configuración de Google Analytics
      analytics: {
        id: "G-QZ6Q78SEQK",
        config: {
          cookie_domain: "auto",
          cookie_expires: 63072000,
          cookie_prefix: "none",
          cookie_update: true,
          cookie_flags: "",
          send_page_view: true,
          allow_google_signals: true,
          allow_ad_personalization_signals: true,
        },
        consentDefaults: {
          analytics_storage: "granted",
          ad_storage: "denied",
          wait_for_update: 500,
        },
        persistentValues: {
          currency: "EUR",
        },
      },
    }),
  ],
});
