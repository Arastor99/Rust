import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Tabla } from "./Tabla";
import { Raid } from "./Raid";
import { Breeder } from "./gens/Breeder";

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decay" element={<Tabla />}></Route>
      <Route path="/raid" element={<Raid />}></Route>
      <Route path="/gens" element={<Breeder />}></Route>
    </Routes>
  );
};
