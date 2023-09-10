import React from "react";
import Navbar from "./Navbar";
import "../../styles/design.css";
import { useTranslation } from "react-i18next";
import { Header } from "./Header";
//images

import bgraid from "../../public/static/resources/index/raidindex.png";
import bgstats from "../../public/static/resources/index/statsindex.png";
import bgcameras from "../../public/static/resources/index/camerasindex.png";
import bgmonuments from "../../public/static/resources/index/bgmonuments.png";
import bgdiesel from "../../public/static/resources/index/dieselindex.png";
import bggenetic from "../../public/static/resources/index/bggenetic.png";
import bgdecay from "../../public/static/resources/index/decayindex.png";
import bg from "../../public/static/resources/bgtest.png";
//videos

import vraid from "../../public/static/resources/index/raid.mp4";
import vdecay from "../../public/static/resources/index/vdecay.mp4";
import vcamera from "../../public/static/resources/index/camera.mp4";
import vdiesel from "../../public/static/resources/index/diesel.mp4";
import vplant from "../../public/static/resources/index/plant.mp4";
import vdome from "../../public/static/resources/index/dome.mp4";
import trailer from "../../public/static/resources/index/trailer.mp4";
import { HashLink } from "react-router-hash-link";

export const Index = () => {
  const { t, i18n } = useTranslation();

  const cardStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    /* Otras propiedades de estilo para tu componente */
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-gray-700 min-h-screen relative" style={cardStyle}>
        {/* Contenedor principal */}

        <div className="container mx-auto py-8 px-4">
          {/* Sección del banner */}
          <div className="absolute pt-96  justify-center text-center Roboto text-blue-400 text-xl">
            Website is work in progress
          </div>
          <div className="rounded-lg p-28 mb-24 text-center mt-24 relative">
            {/* Contenido del banner */}
            <video
              src={trailer}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            ></video>
          </div>

          {/* Sección de tarjetas */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container text-center">
            {/* Tarjeta 1 */}
            <HashLink to="/decay">
              <div className="d-inline-block">
                <div
                  className="card"
                  style={{ backgroundImage: `url(${bgdecay})` }}
                >
                  <video
                    src={vdecay}
                    autoPlay
                    loop
                    muted
                    className=" flex w-full h-full object-cover"
                  ></video>
                  <div className="card-content">
                    <h2 className="card-title Roboto-bold text-2xl">
                      {t("index.decay-title")}
                    </h2>
                    <p className="card-body Roboto">{t("index.decay-info")}</p>
                    <a href="#" className="button  Roboto">
                      <p className="text-white">{t("index.decay-title")}</p>
                    </a>
                  </div>
                </div>
              </div>
            </HashLink>
            {/* Tarjeta 2 */}
            <HashLink to="/raidtable">
              <div>
                <div
                  className="card"
                  style={{ backgroundImage: `url(${bgraid})` }}
                >
                  <video
                    src={vraid}
                    autoPlay
                    loop
                    muted
                    className=" flex w-full h-full object-cover"
                  ></video>
                  <div className="card-content">
                    <h2 className="card-title Roboto-bold text-2xl">
                      {t("index.raid-title")}
                    </h2>
                    <p className="card-body Roboto">{t("index.raid-info")}</p>
                    <a href="#" className="button Roboto">
                      <p className="text-white">{t("index.raid-title")}</p>
                    </a>
                  </div>
                </div>
              </div>
            </HashLink>

            {/* Tarjeta 3 */}
            <HashLink to="/statistics">
              <div>
                <div
                  className="card"
                  style={{ backgroundImage: `url(${bgstats})` }}
                >
                  <video
                    src={vplant}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  ></video>
                  <div className="card-content">
                    <h2 className="card-title Roboto-bold text-2xl">
                      {t("index.stats-title")}
                    </h2>
                    <p className="card-body Roboto">{t("index.decay-info")}</p>
                    <a href="#" className="button Roboto">
                      <p className="text-white">{t("index.stats-title")}</p>
                    </a>
                  </div>
                </div>
              </div>
            </HashLink>
            {/* Tarjeta 4 */}
            <HashLink to="/cameras">
              <div>
                <div
                  className="card"
                  style={{ backgroundImage: `url(${bgcameras})` }}
                >
                  <video
                    src={vcamera}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  ></video>
                  <div className="card-content">
                    <h2 className="card-title Roboto-bold text-2xl">
                      {t("index.cameras-title")}
                    </h2>
                    <p className="card-body Roboto">
                      {t("index.cameras-info")}
                    </p>
                    <a href="#" className="button Roboto">
                      <p className="text-white">{t("index.cameras-title")}</p>
                    </a>
                  </div>
                </div>
              </div>
            </HashLink>

            {/* Tarjeta 5 */}
            <HashLink to="/monuments">
              <div>
                <div
                  className="card"
                  style={{ backgroundImage: `url(${bgmonuments})` }}
                >
                  <video
                    src={vdome}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  ></video>
                  <div className="card-content">
                    <h2 className="card-title Roboto-bold text-2xl">
                      {t("index.monuments-title")}
                    </h2>
                    <p className="card-body Roboto">
                      {t("index.monuments-info")}
                    </p>
                    <a href="#" className="button Roboto">
                      <p className="text-white">Puzzles</p>
                    </a>
                  </div>
                </div>
              </div>
            </HashLink>
            {/* Tarjeta 6 */}
            <HashLink to="">
              <div>
                <div
                  className="card"
                  style={{ backgroundImage: `url(${bgdiesel})` }}
                >
                  <video src={vdiesel} autoPlay loop muted></video>
                  <div className="card-content">
                    <h2 className="card-title Roboto-bold text-2xl">
                      {t("index.diesel-title")}
                    </h2>
                    <p className="card-body Roboto">{t("index.diesel-info")}</p>
                    <a href="#" className="button Roboto">
                      <p className="text-white">Diesel</p>
                    </a>
                  </div>
                </div>
              </div>
            </HashLink>

            {/* Tarjeta 7 */}
            <HashLink to="/breeder">
              <div>
                <div
                  className="card relative"
                  style={{ backgroundImage: `url(${bggenetic})` }}
                >
                  <video
                    src={vraid}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  ></video>
                  <div className="card-content">
                    <h2 className="card-title Roboto-bold text-2xl">
                      {t("index.genetics-title")}
                    </h2>
                    <p className="card-body Roboto">
                      {t("index.genetics-info")}
                    </p>
                    <a href="#" className="button Roboto">
                      <p className="text-white">Genetics</p>
                    </a>
                  </div>
                </div>
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};
