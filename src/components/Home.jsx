import React, { useState } from "react";
import Navbar from "./Navbar";

import { Tabla } from "../components/Tabla";
import { Raid } from "../components/Raid";
import { Breeder } from "../components/gens/Breeder";
import { Helmet } from "react-helmet";
import { Cameras } from "../components/Cameras";
import gif from "../../public/static/resources/melee/gif.gif";

export const Home = () => {
  const [domain, setDomain] = useState(window.location.hostname);

  return (
    <>
      <Helmet>
        <meta name="Index" content="Index of rust-aio" />
      </Helmet>
      <Navbar />
      <div className="flex flex-col pt-24 bg-[#0c0d0d] md:flex-row overflow-x-hidden">
        <div className="w-full bg-[#0c0d0d]order-last md:order-none">
          <div id="decay">
            <Tabla />
          </div>
          <div id="breeder">
            <Breeder />
          </div>
          <div id="cameras" className="my-12">
            <Cameras />
          </div>
          <div id="raid">
            <Raid />
          </div>
        </div>
      </div>

      <Helmet></Helmet>
    </>
  );
};
