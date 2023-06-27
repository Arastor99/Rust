import React from "react";
import Navbar from "./Navbar";

import { Tabla } from "../components/Tabla";
import { Raid } from "../components/Raid";
import { Breeder } from "../components/gens/Breeder";
import { Helmet } from "react-helmet";
import { Cameras } from "../components/Cameras";

export const Home = () => {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8479674626279690"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Navbar />

      <div id="decay">
        <Tabla />
      </div>

      <div id="breeder">
        <Breeder />
      </div>

      <div id="cameras" className="py-24 bg-gray-800">
        <Cameras />
      </div>
      <div id="raid">
        <Raid />
      </div>
    </>
  );
};
