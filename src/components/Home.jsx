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

  {
    if (domain !== "rust-aio.com") {
      setDomain("https://rust-aio.com");
      console.log(domain);
      window.location.replace("https://rust-aio.com");
    }
  }

  return (
    <>
      {/*
      

      <div className="md:flex bg-gray-800">
        <aside className="md:w-1/4 bg-gray-800 md:h-screen">
          <div id="ezoic-pub-ad-placeholder-103"> </div>
        </aside>

        <div className="md:w-1/2">
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
        </div>

        <aside className="md:w-1/4 bg-gray-800 md:h-screen">
          <div id="ezoic-pub-ad-placeholder-104"> </div>
        </aside>
      </div>
       */}

      <Navbar />
      <div className="flex flex-col pt-24 bg-gray-800 md:flex-row overflow-x-hidden">
        <div className="w-full bg-gray-800 order-last md:order-none">
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

      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8479674626279690"
          crossorigin="anonymous"
        ></script>
      </Helmet>
    </>
  );
};
