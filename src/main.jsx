import React from "react";
import ReactDOM from "react-dom/client";
import { Tabla } from "./components/Tabla";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import { inject } from "@vercel/analytics";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import global_es from "./translation/es/global.json";
import global_en from "./translation/en/global.json";
import { Rutas } from "./components/Rutas";
import { Helmet } from "react-helmet";

i18next.init({
  interpolation: { escapeValue: false },
  resources: {
    "es-ES": {
      translation: global_es,
    },
    "en-UK": {
      translation: global_en,
    },
  },
  lng: navigator.language,
  fallbackLng: "en-UK",
});

inject();
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Helmet>
      <script defer src="https://overtracking.com/p/POVxcNKekQzZTgkN"></script>
    </Helmet>

    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </I18nextProvider>
    <Analytics mode={"production"} />
  </>
);
