import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Tabla } from "./Tabla";
import { Raid } from "./Raid";
import { Breeder } from "./gens/Breeder";
import { Info } from "./Info";
import { Privacy } from "./Privacy";
import { Monuments } from "./Monuments";
import { Diesel } from "./Diesel";
import { Index } from "./Index";
import { Stats } from "./Stats";
import { Statistics } from "./Statistics";
import { Cameras } from "./Cameras";

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/info" element={<Info />}></Route>
      <Route path="/decay" element={<Tabla />}></Route>
      <Route path="/breeder" element={<Breeder />}></Route>
      <Route path="/raidtable" element={<Raid />}></Route>
      <Route path="/cameras" element={<Cameras />}></Route>
      <Route path="/privacy" element={<Privacy />}></Route>
      <Route path="/monuments" element={<Monuments />}></Route>
      <Route path="/diesel" element={<Diesel />}></Route>
      <Route path="/stats/:user" element={<Stats />}></Route>
      <Route path="/statistics" element={<Statistics />}></Route>
    </Routes>
  );
};
