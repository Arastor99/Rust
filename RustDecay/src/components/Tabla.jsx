import { useRef, useState } from "react"

export const Tabla = () => {

    const material = useRef();
    const estructura = useRef();

    const handleTiempo = () => {
        console.log(material.current.value);
        console.log(estructura.current.value);
    }
  return (
   <>
   <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
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
                    <p className="font-medium text-slate-700 pb-2">Tipo de estructura</p>
                    <select ref={estructura} id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address">
                        <option value="wood"> Madera</option>
                        <option value="stone">Piedra</option>
                        <option value="metal">Metal</option>
                        <option value="hq">Metal de alta calidad</option>
                    
                    </select>
                </label>
               
                <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center" onClick={handleTiempo}>
                      
                      <span>Calcular</span>
                </button>
            </div>
    </div>
   </>
  )
}


