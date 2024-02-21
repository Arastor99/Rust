import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Tabla } from "./Tabla";
import { Raid } from "./Raid";
import { Monuments } from "./Monuments";
import { Diesel } from "./Diesel";
import { Index } from "./Index";
import { Stats } from "./Stats";
import { Statistics } from "./Statistics";
import { Cameras } from "./Cameras";

export const Rutas = () => {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-2NQH205YKS";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-2NQH205YKS');
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/decay" element={<Tabla />}></Route>
      <Route path="/raidtable" element={<Raid />}></Route>
      <Route path="/cameras" element={<Cameras />}></Route>
      <Route path="/monuments" element={<Monuments />}></Route>
      <Route path="/diesel" element={<Diesel />}></Route>
      <Route path="/stats/:user" element={<Stats />}></Route>
      <Route path="/statistics" element={<Statistics />}></Route>
    </Routes>
  );
};