import { useRef, useState } from "react";
import Navbar from "./Navbar";
import { decimal2HHMISS } from "../functions/decimalToDate";
import Select from "./Select";

//images
import image from "../bg.jpg";
import wood from '/public/static/resources/wood.png';
import stone from '/public/static/resources/stone.png';
import metal from '/public/static/resources/metal.png';
import hq from '/public/static/resources/hq.png';
import dw from '/public/static/resources/dw.png';
import dm from '/public/static/resources/dm.png';
import dg from '/public/static/resources/dg.png';
import dq from '/public/static/resources/dq.png';



export const Tabla = () => {
  const vida = useRef();
  const material = [
    {
      id: 1,
      name: "Madera",
      value: 'wood',
      img: <img className="h-8 w-8" src={wood} />,
    },
    {
      id: 2,
      name: "Piedra",
      value: 'stone',
      img: <img className="h-8 w-8" src={stone} />,
    },
    {
      id: 3,
      name: "Metal",
      value: 'metal',
      img: <img className="h-8 w-8" src={metal} />,
    },
    {
      id: 4,
      name: "Metal de alta calidad",
      value: 'hq',
      img: <img className="h-8 w-8" src={hq} />,
    },
    {
      id: 5,
      name: "Puerta de madera",
      value: 'dw',
      img: <img className="h-8 w-8" src={dw} />,
    },
    {
      id: 6,
      name: "Puerta de metal",
      value: 'dm',
      img: <img className="h-8 w-8" src={dm} />,
    },
    {
      id: 7,
      name: "Puerta de garaje",
      value: 'dg',
      img: <img className="h-8 w-8" src={dg} />,
    },
    {
      id: 8,
      name: "Puera armored",
      value: 'dq',
      img: <img className="h-8 w-8" src={dq} />,
    },
  ];
  const [selected, setSelected] = useState(material[0]);
  const [tiempo, setTiempo] = useState();


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
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Navbar />

        <div className="mt-24 opacity-90 max-w-lg mx-auto bg-stone-400 p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium font-face-r text-center ">
            Rust Decay Calculator
          </h1>
          <p className="text-slate-500">
            Elije los materiales para calcular el tiempo restante
          </p>

          <div className="flex flex-col space-y-5">
            <label htmlFor="material">
              <p className="font-medium text-slate-700 pb-2">
                Tipo de material
              </p>
              <Select selected={selected} setSelected={setSelected} material={material}/>
            </label>
            <label htmlFor="estructura">
              <p className="font-medium text-slate-700 pb-2">
                Vida de la estructura
              </p>
              <input
                className="font-sans w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                type="number"
                ref={vida}
              />
            </label>
            <div className="font-sans font-bold text-xl w-full text-center" id="tiempo">{tiempo}</div>
            <button
              className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              onClick={handleTiempo}
            >
              <span className="text-xl">Calcular</span>
            </button>
          </div>
          <span className="font-sans">
            Considere que el tiempo de decay ve desde fuera hacia dentro, es
            decir cuanto mas lejos este del TC (armario) menos tiempo tardara en
            caer, asi que es un tiempo aproximado
          </span>
        </div>
      </div>
    </>
  );
};
