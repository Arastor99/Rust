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
import { Monument } from "./Monument";
import { Header } from "./Header";
export const Monuments = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-[#0C0D0D] text-white Roboto">
        <header className="bg-[#0C0D0D] py-4">
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
          <div className="flex justify-center items-center bg-[#0C0D0D] pb-12">
            <table className="bg-[#0C0D0D] text-white rounded-lg ">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
                <div className="bg-[#222121] p-4 rounded-lg hover:scale-110 transform transition-transform duration-300">
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
          <div className="flex justify-center items-center bg-[#0C0D0D]">
            <div className="max-w-6xl">
              <h1 className="text-4xl font-bold text-white mb-8 mt-24">
                Monumentos
              </h1>
              <Monument
                id="water"
                name={t("mname.water")}
                url="https://www.youtube.com/embed/v0SNddMqBIo"
                requirements={[
                  {
                    name: "misc.blue",
                    img: blue,
                  },
                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                  {
                    name: "misc.rad",
                    img: rad,
                  },
                ]}
              />
              <hr className="flex-grow border-t-2 border-white " />
              <Monument
                id="power"
                name={t("mname.power")}
                url="https://www.youtube.com/embed/ngztOcif0bo"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },
                  {
                    name: "misc.blue",
                    img: blue,
                  },
                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                  {
                    name: "misc.rad",
                    img: rad,
                  },
                ]}
              />
              <hr className="flex-grow border-t-2 border-white" />
              <Monument
                id="harbora"
                name={t("mname.harbors")}
                url="https://www.youtube.com/embed/V5eEgMLZiMs"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },

                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                ]}
              />

              <Monument
                name={t("mname.harborl")}
                url="https://www.youtube.com/embed/CmtOtDklnG4"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },

                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                ]}
              />
              <hr className="flex-grow border-t-2 border-white" />
              <Monument
                id="airfield"
                name={t("mname.airfield")}
                url="https://www.youtube.com/embed/3v89-1I0owo"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },
                  {
                    name: "misc.blue",
                    img: blue,
                  },
                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                  {
                    name: "misc.rad",
                    img: rad,
                  },
                ]}
              />

              <hr className="flex-grow border-t-2 border-white " />
              <Monument
                id="junkyard"
                name={t("mname.junkyard")}
                url="https://www.youtube.com/embed/V5eEgMLZiMs"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },
                ]}
              />
              <hr className="flex-grow border-t-2 border-white " />
              <Monument
                id="launch"
                name={t("mname.launch")}
                url="https://www.youtube.com/embed/XJ-GiPxUXP8"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },
                  {
                    name: "misc.blue",
                    img: blue,
                  },
                  {
                    name: "misc.red",
                    img: red,
                  },
                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                  {
                    name: "misc.rad",
                    img: rad,
                  },
                  {
                    name: "misc.radlaunch",
                    img: rad,
                  },
                ]}
              />

              <hr className="flex-grow border-t-2 border-white " />
              <Monument
                id="lighthouse"
                name={t("mname.lighthouse")}
                url="https://www.youtube.com/embed/3-HDUm70Cyk"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },
                ]}
              />
              <hr className="flex-grow border-t-2 border-white " />
              <Monument
                id="tunel"
                name={t("mname.tunel")}
                url="https://www.youtube.com/embed/EjElQZL25FI"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },
                  {
                    name: "misc.blue",
                    img: blue,
                  },
                  {
                    name: "misc.red",
                    img: red,
                  },
                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                  {
                    name: "misc.rad",
                    img: rad,
                  },
                  {
                    name: "misc.rad27",
                    img: rad,
                  },
                ]}
              />
              <hr className="flex-grow border-t-2 border-white " />
              <Monument
                id="silo"
                name={t("mname.silo")}
                url="https://www.youtube.com/embed/V-TY-4ywA9I"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },
                  {
                    name: "misc.blue",
                    img: blue,
                  },
                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                  {
                    name: "misc.rad",
                    img: rad,
                  },
                ]}
              />
              <hr className="flex-grow border-t-2 border-white " />
              <Monument
                id="satelite"
                name={t("mname.satelite")}
                url="https://www.youtube.com/embed/ri225udSk50"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },
                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                  {
                    name: "misc.rad10",
                    img: rad,
                  },
                ]}
              />

              <hr className="flex-grow border-t-2 border-white " />
              <Monument
                id="sewer"
                name={t("mname.sewer")}
                url="https://www.youtube.com/embed/zYErs-b0UGY"
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },
                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                  {
                    name: "misc.rad10",
                    img: rad,
                  },
                ]}
              />

              <hr className="flex-grow border-t-2 border-white " />
              <Monument
                id="train"
                name={t("mname.train")}
                url=""
                requirements={[
                  {
                    name: "misc.green",
                    img: green,
                  },
                  {
                    name: "misc.blue",
                    img: blue,
                  },
                  {
                    name: "misc.fuse",
                    img: fuse,
                  },
                  {
                    name: "misc.rad",
                    img: rad,
                  },
                ]}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
