import React from "react";
import decay from "../../public/static/resources/decay.png";
import raid from "/public/static/resources/raid.png";
import crossbreeding from "../../public/static/resources/crossbreeding.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import gif from "../../public/static/resources/melee/gif.gif";
export const Info = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet></Helmet>
      <Navbar />
      <div className="bg-gray-800 text-white min-h-screen">
        <header className="bg-gray-800 py-4">
          <div className="container mx-auto px-4"></div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="flex">
            <div className="w-1/4 flex items-center justify-center"></div>

            <div className="flex-1 mx-2 lg:mx-4">
              <h2 className="text-4xl font-bold my-4 text-center">
                <a href="/decay" className="text-white hover:underline">
                  Decay Calculator
                </a>
              </h2>
              <div className="p-4 ">
                <img src={decay} alt="Decay" className="mx-auto" />
                <p className="text-xl p-10">{t("home.decay")}</p>
              </div>

              <hr className="my-8 border-gray-500" />

              <h2 className="text-4xl font-bold mt-8 mb-4 text-center">
                <a href="/raid" className="text-white hover:underline">
                  Raid Table
                </a>
              </h2>
              <div className="p-4 text-center">
                <img src={raid} alt="" className="mx-auto" />
                <p className="text-xl p-10">{t("home.raid")}</p>
              </div>

              <hr className="my-8 border-gray-500" />

              <h2 className="text-4xl font-bold mt-8 mb-4 text-center">
                <a href="/gens" className="text-white hover:underline">
                  Crossbreeding
                </a>
              </h2>
              <div className="p-4 ">
                <img
                  src={crossbreeding}
                  alt="Crossbreeding"
                  className="mx-auto"
                />
                <ul className="text-xl p-10 ">
                  <li className="py-4 flex">
                    <p className="underline font-semibold pr-2">
                      {t("home.add-genes")}
                    </p>
                    {t("home.add-genes-message")}
                  </li>
                  <li className="py-4 flex">
                    <p className="underline font-semibold pr-2">
                      {t("home.target")}
                    </p>
                    {t("home.target-message")}
                  </li>
                  <li className="py-4 flex">
                    <p className="underline font-semibold pr-2">
                      {t("home.available-genetics")}
                    </p>
                    {t("home.available-genetics-message")}
                  </li>
                  <li className="py-4 flex">
                    <p className="underline font-semibold pr-2">
                      {t("home.breeding-genetics")}
                    </p>
                    {t("home.breeding-genetics-message")}
                  </li>
                  <li className="py-4 flex">
                    <p className="underline font-semibold pr-2">
                      {t("home.result")}
                    </p>
                    {t("home.result-message")}
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-1/4 flex items-center justify-center">
              <div id="ezoic-pub-ad-placeholder-106"> </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
