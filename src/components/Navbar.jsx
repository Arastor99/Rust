import React, { useState } from "react";
import logo from "../logo.png";
import LanguageSelect from "./LanguageSelect";
import en from "/static/resources/uk.png";
import es from "/static/resources/spain.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
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
  const [language, setLanguage] = useState(lang[0]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = lang.find(
      (lang) => lang.value === event.target.value
    );
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage.value);
  };

  useEffect(() => {
    const userLanguage = navigator.language;
    const defaultLanguage =
      lang.find((lang) => lang.value === userLanguage) || lang[0];
    setLanguage(defaultLanguage);
    i18n.changeLanguage(defaultLanguage.value);
  }, []);
  return (
    <nav className="bg-gray-900 rustFont fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </a>
            {/* Opciones del navbar en el modo de escritorio */}
            <div className="hidden md:flex md:space-x-4 ml-4">
              <HashLink
                smooth
                to="/#decay"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Decay calculator
              </HashLink>
              <HashLink
                smooth
                to="/#breeder"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                genetic
              </HashLink>
              <HashLink
                smooth
                to="/#cameras"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Cameras
              </HashLink>
              <HashLink
                smooth
                to="/#raid"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Raid table
              </HashLink>

              <a
                href="/info"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium "
              >
                How to use
              </a>
            </div>
          </div>

          <div className="flex items-center">
            {/* Selector de idioma en el navbar principal */}
            <LanguageSelect
              language={language}
              setLanguage={setLanguage}
              lang={lang}
              i18n={i18n}
            />

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
