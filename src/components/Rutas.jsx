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
import { Test } from "./Test";

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />}></Route>
      <Route path="/privacy" element={<Privacy />}></Route>
      <Route path="/monuments" element={<Monuments />}></Route>
      <Route path="/diesel" element={<Diesel />}></Route>
      <Route path="/testingindex" element={<Test />}></Route>
    </Routes>
  );
};
