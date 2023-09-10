import { useState, createContext } from "react";

import "./App.css";
import "./fonts/Rust.ttf";
import "./fonts/Roboto-Black.ttf";
import "./fonts/Roboto-Bold.ttf";

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

export const UserContext = createContext("");

function App() {
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

  const [user, setUser] = useState("");
  return (
    <>
      <Helmet>
        <script
          defer
          src="https://overtracking.com/p/POVxcNKekQzZTgkN"
        ></script>
      </Helmet>

      <I18nextProvider i18n={i18next}>
        <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Rutas />
          </BrowserRouter>
        </UserContext.Provider>
      </I18nextProvider>
      <Analytics mode={"production"} />
    </>
  );
}

export default App;
