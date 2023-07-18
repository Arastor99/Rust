import React from "react";
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
import Navbar from "./Navbar";
import YouTube from "react-youtube";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

export const Monuments = () => {
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
          <div className="flex justify-center items-center bg-gray-900 pb-12">
            <table className="bg-gray-800 text-white rounded-lg ">
              <thead>
                <tr>
                  <th className="px-4 py-2">{t("misc.color")}</th>
                  <th className="px-4 py-2">{t("misc.find")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    <span className="text-green-400">{t("misc.green")}</span>
                  </td>
                  <td className="border px-4 py-2">
                    <ul>
                      <li>{t("mname.oxum")}</li>
                      <li>{t("mname.supermarket")}</li>
                      <li>{t("mname.lighthouse")}</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <span className="text-blue-400">{t("misc.blue")}</span>
                  </td>
                  <td className="border px-4 py-2">
                    <ul>
                      <li>{t("mname.harbor")}</li>
                      <li>{t("mname.sewer")}</li>
                      <li>{t("mname.satelite")}</li>
                      <li>{t("mname.outpost")}</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <span className="text-red-400">{t("misc.red")}</span>
                  </td>
                  <td className="border px-4 py-2">
                    <ul>
                      <li>{t("mname.airfield")}</li>
                      <li>{t("mname.water")}</li>
                      <li>{t("mname.train")}</li>
                      <li>{t("mname.silo")}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
              <HashLink smooth to="#harbora">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={harbor}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.harbor")}
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
              <HashLink smooth to="#launch">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={launch}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.launch")}
                  </h3>
                </div>
              </HashLink>
              <HashLink smooth to="#lighthouse">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={lighthouse}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.lighthouse")}
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
              <HashLink smooth to="#satelite">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={satelite}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.satelite")}
                  </h3>
                </div>
              </HashLink>
              <HashLink smooth to="#sewer">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={sewer}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.sewer")}
                  </h3>
                </div>
              </HashLink>
              <HashLink smooth to="#train">
                <div className="bg-gray-800 p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
                  <img
                    src={train}
                    alt="Monumento 2"
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-xl font-bold mb-2 pt-4">
                    {t("mname.train")}
                  </h3>
                </div>
              </HashLink>
            </div>
          </section>
          <div className="flex justify-center items-center bg-gray-900">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white mb-8 mt-24">
                Monumentos
              </h1>

              <div className="container mx-auto px-2 py-8" id="water">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.water")}
                    </h2>
                    <ul className=" pl-4">
                      <li>
                        {t("misc.blue")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={blue}
                          alt="blue"
                        />
                      </li>
                      <li>
                        {t("misc.fuse")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={fuse}
                          alt="fuse"
                        />
                      </li>
                      <li>
                        {t("misc.rad")}{" "}
                        <img
                          className="inline-block w-4 h-4"
                          src={rad}
                          alt="rad"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/v0SNddMqBIo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-32" />
              <div className="container mx-auto px-2 py-8" id="power">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.power")}
                    </h2>
                    <ul className=" pl-4">
                      <li>
                        {t("misc.green")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={green}
                          alt="green"
                        />
                      </li>
                      <li>
                        {t("misc.blue")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={blue}
                          alt="blue"
                        />
                      </li>
                      <li>
                        {t("misc.fuse")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={fuse}
                          alt="fuse"
                        />
                      </li>
                      <li>
                        {t("misc.rad")}{" "}
                        <img
                          className="inline-block w-4 h-4"
                          src={rad}
                          alt="rad"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/ngztOcif0bo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="harbora">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.harbors")}
                    </h2>
                    <ul className=" pl-4">
                      <li>
                        {t("misc.green")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={green}
                          alt="green"
                        />
                      </li>
                      <li>
                        {t("misc.fuse")}{" "}
                        <img
                          className="inline-block w-4 h-4"
                          src={rad}
                          alt="rad"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/V5eEgMLZiMs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="harborb">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.harborl")}
                    </h2>
                    <ul className=" pl-4">
                      <li>
                        {t("misc.green")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={green}
                          alt="green"
                        />
                      </li>
                      <li>
                        {t("misc.fuse")}{" "}
                        <img
                          className="inline-block w-4 h-4"
                          src={rad}
                          alt="rad"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/CmtOtDklnG4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="airfield">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.airfield")}
                    </h2>
                    <ul className=" pl-4">
                      <li>
                        {t("misc.green")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={green}
                          alt="green"
                        />
                      </li>
                      <li>
                        {t("misc.blue")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={blue}
                          alt="blue"
                        />
                      </li>
                      <li>
                        {t("misc.fuse")}
                        {" x 2 "}
                        <img
                          className="inline-block w-6 h-6"
                          src={fuse}
                          alt="fuse"
                        />
                      </li>
                      <li>
                        {t("misc.rad")}{" "}
                        <img
                          className="inline-block w-4 h-4"
                          src={rad}
                          alt="rad"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/V5eEgMLZiMs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="junkyard">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.junkyard")}
                    </h2>
                    <ul className="list-disc pl-4"></ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/4ncY8syxbzQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="launch">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.launch")}
                    </h2>
                    <ul className=" pl-4">
                      <li>
                        {t("misc.green")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={green}
                          alt="green"
                        />
                      </li>
                      <li>
                        {t("misc.red")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={red}
                          alt="red"
                        />
                      </li>
                      <li>
                        {t("misc.fuse")}
                        {" x 2 "}
                        <img
                          className="inline-block w-6 h-6"
                          src={fuse}
                          alt="fuse"
                        />
                      </li>
                      <li>
                        {t("misc.rad")}{" "}
                        <img
                          className="inline-block w-4 h-4"
                          src={rad}
                          alt="rad"
                        />
                      </li>
                      <li>{t("misc.radlaunch")} </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/XJ-GiPxUXP8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="lighthouse">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.lighthouse")}
                    </h2>
                    <ul className="list-disc pl-4"></ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/3-HDUm70Cyk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="tunel">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.tunel")}
                    </h2>
                    <ul className=" pl-4">
                      <li>
                        {" "}
                        {t("misc.green")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={green}
                          alt="green"
                        />
                      </li>
                      <li>
                        {" "}
                        {t("misc.blue")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={blue}
                          alt="blue"
                        />
                      </li>
                      <li>
                        {" "}
                        {t("misc.fuse")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={fuse}
                          alt="fuse"
                        />
                      </li>
                      <li> {t("misc.guns")} </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/EjElQZL25FI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="silo">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.silo")}
                    </h2>
                    <ul className=" pl-4">
                      <li>
                        {" "}
                        {t("misc.blue")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={blue}
                          alt="blue"
                        />
                      </li>
                      <li>
                        {" "}
                        {t("misc.rad")}{" "}
                        <img
                          className="inline-block w-4 h-4"
                          src={rad}
                          alt="rad"
                        />
                      </li>
                      <li> {t("misc.guns")} </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/V-TY-4ywA9I"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="satelite">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.satelite")}
                    </h2>
                    <ul className=" pl-4">
                      <li>
                        {" "}
                        {t("misc.green")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={green}
                          alt="green"
                        />
                      </li>
                      <li>
                        {t("misc.fuse")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={fuse}
                          alt="fuse"
                        />
                      </li>
                      <li>
                        {t("misc.rad10")}{" "}
                        <img
                          className="inline-block w-4 h-4"
                          src={rad}
                          alt="rad"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/ri225udSk50"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="sewer">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.sewer")}
                    </h2>
                    <ul className=" pl-4">
                      <li>
                        {" "}
                        {t("misc.green")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={green}
                          alt="green"
                        />
                      </li>
                      <li>
                        {t("misc.fuse")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={fuse}
                          alt="fuse"
                        />
                      </li>
                      <li>
                        {t("misc.rad10")}{" "}
                        <img
                          className="inline-block w-4 h-4"
                          src={rad}
                          alt="rad"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/zYErs-b0UGY"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
              <div className="container mx-auto px-2 py-8" id="train">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      {t("mname.train")}
                    </h2>
                    <ul className="pl-4">
                      <li>
                        {" "}
                        {t("misc.green")} {t("misc.optional")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={green}
                          alt="green"
                        />
                      </li>
                      <li>
                        {t("misc.blue")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={blue}
                          alt="blue"
                        />
                      </li>
                      <li>
                        {t("misc.fuse")}{" "}
                        <img
                          className="inline-block w-6 h-6"
                          src={fuse}
                          alt="fuse"
                        />
                      </li>
                      <li>
                        {t("misc.rad")}{" "}
                        <img
                          className="inline-block w-4 h-4"
                          src={rad}
                          alt="rad"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="video-iframe w-full h-48"
                        src="https://www.youtube.com/embed/3v89-1I0owo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 border-white pb-24" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
