import React, { useState } from "react";
import logo from "../logo.png";
import LanguageSelect from "./LanguageSelect";
import en from "/static/resources/uk.png";
import es from "/static/resources/spain.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Header } from "./Header";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const userLanguage = navigator.language;
    const defaultLanguage =
      lang.find((lang) => lang.value === userLanguage) || lang[0];
    setLanguage(defaultLanguage);
    i18n.changeLanguage(defaultLanguage.value);
  }, []);
  return (
    <>
      <Header />
      <nav className="bg-[#1a1c1f]  fixed top-0 w-full z-50 Roboto ">
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
                  to="/decay"
                  className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("navbar.decay")}
                </HashLink>
                <HashLink
                  smooth
                  to="/breeder"
                  className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("navbar.genetic")}
                </HashLink>
                <HashLink
                  smooth
                  to="/cameras"
                  className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("navbar.cameras")}
                </HashLink>
                <HashLink
                  smooth
                  to="/raidtable"
                  className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("navbar.raid")}
                </HashLink>
                <HashLink
                  to="/statistics"
                  className="text-blue-600 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
                >
                  {t("navbar.statistics")}
                </HashLink>

                <div className="relative text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center focus:outline-none text-base"
                  >
                    {t("navbar.monuments")}
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                      <a
                        href="/monuments"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {t("navbar.puzzles")}
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {t("navbar.diesel")}
                      </a>
                    </div>
                  )}
                </div>
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
              <div className="text-gray-300 text-xs font-sans pl-12 font-semibold">
                <ul>
                  <li className="hover:text-white">
                    <a href="/privacy">{t("navbar.privacy")}</a>
                  </li>
                </ul>
              </div>

              {/* Botón para desplegar el menú en dispositivos móviles */}
              <button
                className="md:hidden text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium ml-4"
                onClick={handleMenuToggle}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
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
                <HashLink
                  smooth
                  to="/decay"
                  className="block text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("navbar.decay")}
                </HashLink>
                <HashLink
                  smooth
                  to="/raidtable"
                  className="block text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("navbar.raid")}
                </HashLink>
                <HashLink
                  smooth
                  to="/breeder"
                  className="block text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("navbar.genetic")}
                </HashLink>
                <HashLink
                  smooth
                  to="/cameras"
                  className="block text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("navbar.cameras")}
                </HashLink>
                <HashLink
                  smooth
                  to="/statistics"
                  className="block text-blue-600 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t("navbar.statistics")}
                </HashLink>
                <div className="relative text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center focus:outline-none"
                  >
                    {t("navbar.monuments")}
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                      <a
                        href="/monuments"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {t("navbar.puzzles")}
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {t("navbar.diesel")}
                      </a>
                    </div>
                  )}
                </div>
                {/* Selector de idioma dentro del menú desplegable */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
