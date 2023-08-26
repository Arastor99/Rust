import React from "react";
import Navbar from "./Navbar";
import water from "../../public/static/resources/monuments/water.png";
import power from "../../public/static/resources/monuments/power.png";
import harbor from "../../public/static/resources/monuments/harbor.png";
import airfield from "../../public/static/resources/monuments/airfield.png";
import junkyard from "../../public/static/resources/monuments/junkyard.png";
import launch from "../../public/static/resources/monuments/launch.png";
import lighthouse from "../../public/static/resources/monuments/lighthouse.png";
import tunel from "../../public/static/resources/monuments/tunel.png";
import silo from "../../public/static/resources/monuments/silo.png";
import satelite from "../../public/static/resources/monuments/satelite.png";
import sewer from "../../public/static/resources/monuments/sewer.png";
import train from "../../public/static/resources/monuments/train.png";
import rad from "../../public/static/resources/rad.png";
import green from "../../public/static/resources/green.png";
import blue from "../../public/static/resources/blue.png";
import red from "../../public/static/resources/red.png";
import fuse from "../../public/static/resources/fuse.png";
import YouTube from "react-youtube";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import { Monument } from "./Monument";

export const Diesel = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white">
        <header className="bg-gray-800 py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Monumentos</h1>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li>
                  <a href="#green-card" className="text-green-400">
                    {t("misc.water")}
                  </a>
                </li>
                <li>
                  <a href="#blue-card" className="text-blue-400">
                    Blue Card
                  </a>
                </li>
                <li>
                  <a href="#red-card" className="text-red-400">
                    Red Card
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="container mx-auto py-8 text-center">
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <HashLink smooth to="#water">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={water}
                    alt="Monumento 1"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 justify-center pt-4">
                    {t("mname.water")}
                  </h3>
                </div>
              </HashLink>
              <HashLink smooth to="#power">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={power}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.power")}
                  </h3>
                </div>
              </HashLink>
              <HashLink smooth to="#airfield">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={airfield}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.airfield")}
                  </h3>
                </div>
              </HashLink>
              <HashLink smooth to="#junkyard">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={junkyard}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.junkyard")}
                  </h3>
                </div>
              </HashLink>

              <HashLink smooth to="#tunel">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={tunel}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.tunel")}
                  </h3>
                </div>
              </HashLink>
              <HashLink smooth to="#silo">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={silo}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.silo")}
                  </h3>
                </div>
              </HashLink>
            </div>
          </section>
          <div className="flex justify-center items-center bg-gray-900">
            <div className="max-w-6xl">
              <h1 className="text-4xl font-bold text-white mb-8 mt-24">
                Diesel Locations
              </h1>
              <div>{t("mname.oilrigl")}</div>
              <hr className="flex-grow border-t-2 border-white " />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
