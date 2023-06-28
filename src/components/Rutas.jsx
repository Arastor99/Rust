import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Tabla } from "./Tabla";
import { Raid } from "./Raid";
import { Breeder } from "./gens/Breeder";
import { Info } from "./Info";
import { Privacy } from "./Privacy";

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />}></Route>
      <Route path="/privacy" element={<Privacy />}></Route>
    </Routes>
  );
};
