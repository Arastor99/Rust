import { useRef, useState } from "react";
import Navbar from "./Navbar";
import { decimal2HHMISS } from "../functions/decimalToDate";
import Select from "./Select";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";
import { Helmet } from "react-helmet";

//images
import image from "../../public/static/resources/bg.jpg";
import wood from "/static/resources/wood.png";
import stone from "/static/resources/stone.png";
import metal from "/static/resources/metal.png";
import hq from "/static/resources/hq.png";
import dw from "/static/resources/dw.png";
import dm from "/static/resources/dm.png";
import dg from "/static/resources/dg.png";
import dq from "/static/resources/dq.png";
import en from "/static/resources/uk.png";
import es from "/static/resources/spain.png";

export const Tabla = () => {
  const { t, i18n } = useTranslation();
  const vida = useRef();
  const material = [
    {
      id: 1,
      name: t("materials.wood"),
      value: "wood",
      img: <img className="h-8 w-8" src={wood} />,
    },
    {
      id: 2,
      name: t("materials.stone"),
      value: "stone",
      img: <img className="h-8 w-8" src={stone} />,
    },
    {
      id: 3,
      name: t("materials.metal"),
      value: "metal",
      img: <img className="h-8 w-8" src={metal} />,
    },
    {
      id: 4,
      name: t("materials.hq"),
      value: "hq",
      img: <img className="h-8 w-8" src={hq} />,
    },
    {
      id: 5,
      name: t("materials.dw"),
      value: "dw",
      img: <img className="h-8 w-8" src={dw} />,
    },
    {
      id: 6,
      name: t("materials.dm"),
      value: "dm",
      img: <img className="h-8 w-8" src={dm} />,
    },
    {
      id: 7,
      name: t("materials.dg"),
      value: "dg",
      img: <img className="h-8 w-8" src={dg} />,
    },
    {
      id: 8,
      name: t("materials.dq"),
      value: "dq",
      img: <img className="h-8 w-8" src={dq} />,
    },
  ];

  const lang = [
    {
      id: 1,
      name: "EN",
      value: "en-EN",
      img: <img className="h-6 w-8" src={en} />,
    },
    {
      id: 2,
      name: "ES",
      value: "es-ES",
      img: <img className="h-6 w-8" src={es} />,
    },
  ];
  const [selected, setSelected] = useState(material[0]);
  const [tiempo, setTiempo] = useState();
  const [language, setLanguage] = useState(lang[0]);

  const handleTiempo = () => {
    const resource = selected.value;
    const vidaRestante = vida.current.value;
    let time = 0;
    let vidaTotal = 0;

    switch (resource) {
      case "wood":
        vidaTotal = 250;
        setTiempo(decimal2HHMISS((vidaRestante * 3) / vidaTotal));
        console.log(tiempo);
        break;

      case "stone":
        vidaTotal = 500;
        setTiempo(decimal2HHMISS((vidaRestante * 5) / vidaTotal));
        break;

      case "metal":
        vidaTotal = 1000;
        setTiempo(decimal2HHMISS((vidaRestante * 8) / vidaTotal));
        break;

      case "hq":
        vidaTotal = 2000;
        setTiempo(decimal2HHMISS((vidaRestante * 12) / vidaTotal));
        break;

      case "dw":
        vidaTotal = 200;
        setTiempo(decimal2HHMISS((vidaRestante * 3) / vidaTotal));
        break;

      case "dm":
        vidaTotal = 250;
        setTiempo(decimal2HHMISS((vidaRestante * 8) / vidaTotal));
        break;

      case "dg":
        vidaTotal = 600;
        setTiempo(decimal2HHMISS((vidaRestante * 8) / vidaTotal));
        break;

      case "dq":
        vidaTotal = 1000;
        setTiempo(decimal2HHMISS((vidaRestante * 12) / vidaTotal));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8479674626279690"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div
        style={{
          height: "90vh",
          backgroundSize: "cover",
        }}
        className="Roboto-bold bg-[#0c0d0d] text-white"
      >
        <div className="pt-24"></div>
        <div className=" opacity-90 max-w-lg mx-auto bg-[#232529] p-8 rounded-xl ">
          <br />
          <br />
          <h1 className="text-4xl font-medium font-face-r text-center">
            {t("messages.title")}
          </h1>
          <p className="text-slate-500">{t("messages.info1")}</p>
          <div className="flex flex-col space-y-5">
            <label htmlFor="material">
              <p className="font-medium text-slate-700 pb-2">
                {t("messages.info2")}
              </p>
              <Select
                selected={selected}
                setSelected={setSelected}
                material={material}
              />
            </label>
            <label htmlFor="estructura">
              <p className="font-medium text-slate-700 pb-2">
                {t("messages.info3")}
              </p>
              <input
                className="Roboto w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black"
                type="number"
                ref={vida}
              />
            </label>
            <div
              className="Roboto font-bold text-xl w-full text-center"
              id="tiempo"
            >
              {tiempo}
            </div>
            <button
              className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              onClick={handleTiempo}
            >
              <span className="text-xl">{t("messages.info4")}</span>
            </button>
          </div>
          <span className="font-sans">{t("messages.info5")}</span>
        </div>
      </div>
    </>
  );
};
