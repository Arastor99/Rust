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
import { createContext, useState } from "react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
