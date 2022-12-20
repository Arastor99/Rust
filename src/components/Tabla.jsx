import { useRef, useState } from "react";
import image from "../bg.jpg";
import Navbar from "./Navbar";
import { decimal2HHMISS } from "../functions/decimalToDate";

export const Tabla = () => {

    const material = useRef();
    const vida = useRef();
    let [caida, setCaida] = useState();


    const handleTiempo = () => {
        /*
        console.log(estructura.current.value);
        hp de paredes foundation y techos:
        madera: 250hp decay 3h
        piedra: 500hp decay 5h
        metal: 1000hp decay 8h
        hq: 2000hp decay 12h
        */

        const resource = material.current.value;
        const vidaRestante = vida.current.value;
        let tiempo = 0;
        let vidaTotal = 0;
        switch (resource) {
            case 'wood':
                tiempo = 3;
                vidaTotal = 250;
                caida = (vidaRestante * tiempo) / vidaTotal;
                console.log(decimal2HHMISS(caida));
                break;

            case 'stone':
                tiempo = 5;
                vidaTotal = 500;
                caida = (vidaRestante * tiempo) / vidaTotal;
                console.log(decimal2HHMISS(caida));


                break;

            case 'metal':
                tiempo = 8;
                vidaTotal = 1000;
                caida = (vidaRestante * tiempo) / vidaTotal;
                console.log(decimal2HHMISS(caida));

                break;

            case 'hq':
                tiempo = 12;
                vidaTotal = 2000;
                caida = (vidaRestante * tiempo) / vidaTotal;
                console.log(caida);

                break;
        
            default:
                break;
        }


        
    }
  return (
   <>
   <div  style={{ backgroundImage:`url(${image})`, height:'100vh', backgroundSize: 'cover'}}>
    <Navbar/>
   <div className="opacity-90 max-w-lg mx-auto bg-stone-400 p-8 rounded-xl shadow shadow-slate-300" >
        <h1 className="text-4xl font-medium">Rust Decay Calculator</h1>
        <p className="text-slate-500">Elije los materiales para calcular el tiempo restante</p>

            <div className="flex flex-col space-y-5">
                <label htmlFor="material">
                    <p className="font-medium text-slate-700 pb-2">Tipo de material</p>
                    <select ref={material} id="material" name="material" type="material" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address">
                        <option value="wood">Madera</option>
                        <option value="stone">Piedra</option>
                        <option value="metal">Metal</option>
                        <option value="hq">Metal de alta calidad</option>
                    
                    </select>
                </label>
                <label htmlFor="estructura">
                    <p className="font-medium text-slate-700 pb-2">Vida de la estructura</p>
                    <input className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" type="number" ref={vida} />
                </label>
               <div id="tiempo">{caida}</div>
                <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center" onClick={handleTiempo}>
                      
                      <span>Calcular</span>
                </button>
                
            </div>
            <span>Considere que el tiempo de decay ve desde fuera hacia dentro, es decir cuanto mas lejos este del TC (armario) menos tiempo tardara en caer, asi que es un tiempo aproximado</span>
    </div>
    </div>
   </>
  )
}


