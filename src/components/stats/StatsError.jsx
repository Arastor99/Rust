import React from "react";
import profileimg from "../../../public/static/resources/notfound.png";
import banner from "../../../public/static/resources/bannerstats.png";
import Navbar from "../Navbar";
import { InputSearch } from "./InputSearch";
import { useTranslation } from "react-i18next";

export const StatsError = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="bg-[#2B2F38] text-white min-h-screen mt-16">
        <header
          className=" bg-center relative"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute opacity-60 bg-[#23262D] inset-0" />

          <div className="container mx-auto py-10 px-8 flex justify-between items-center relative">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={profileimg}
                  alt="Foto de perfil"
                  className="w-32 h-32 border-4 border-white "
                />
                <div className="absolute inset-0 border-2 border-white  pointer-events-none"></div>
              </div>

              <h1 className="text-3xl font-bold ml-8 mt-2 Roboto-bold text-red-600">
                {t("stats.others.notfound")}
              </h1>
            </div>
            <h1 className="text-3xl font-bold content-center"></h1>
          </div>
        </header>
        <main className="container mx-auto py-8 px-8 mt-11">
          <div className="container mx-auto">
            <div className="text-center mb-6">
              <InputSearch />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
