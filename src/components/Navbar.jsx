import React, { useState } from "react";
import logo from "../logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (event) => {
    // Lógica para cambiar el idioma
  };

  return (
    <nav className="bg-gray-900 rustFont">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-8 w-auto" src={logo} alt="Logo" />

            {/* Opciones del navbar en el modo de escritorio */}
            <div className="hidden md:flex md:space-x-4 ml-4">
              <a
                href="/decay"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Decay calculator
              </a>
              <a
                href="/raid"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Raid table
              </a>
              <a
                href="/gens"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                genetic
              </a>
            </div>
          </div>

          <div className="flex items-center">
            {/* Selector de idioma en el navbar principal */}
            <select
              className="hidden md:block text-gray-300 bg-transparent border-none"
              onChange={handleLanguageChange}
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
              {/* Agrega más opciones de idioma según tus necesidades */}
            </select>

            {/* Botón para desplegar el menú en dispositivos móviles */}
            <button
              className="md:hidden text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium ml-4"
              onClick={handleMenuToggle}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h12v1H4V6zm0 4h12v1H4v-1zm0 4h12v1H4v-1z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h12v1H4V6zm0 4h12v1H4v-1zm0 4h12v1H4v-1z"
                  />
                )}
              </svg>
            </button>

            {/* Menú desplegable para dispositivos móviles */}
            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
              <a
                href="/decay"
                className="block text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Decay calculator
              </a>
              <a
                href="/raid"
                className="block text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Raid table
              </a>
              <a
                href="/gens"
                className="block text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                genetic
              </a>

              {/* Selector de idioma dentro del menú desplegable */}
              <select
                className="mt-4 text-gray-300 bg-transparent border-none"
                onChange={handleLanguageChange}
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
                {/* Agrega más opciones de idioma según tus necesidades */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
