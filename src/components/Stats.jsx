import React from "react";
import Navbar from "./Navbar";
import { useFetchStats } from "../hook/useFetchsteamAPI";
import { Loading } from "./stats/Loading";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { useTranslation } from "react-i18next";

//images
import banner from "../../public/static/resources/bannerstats.png";
import { InputSearch } from "./stats/InputSearch";
import { Kill } from "./stats/Kill";
import { Pvp } from "./stats/Pvp";
import { Bow } from "./stats/Bow";
import { Shotgun } from "./stats/Shotgun";
import { Exposure } from "./stats/Exposure";
import { Gathered } from "./stats/Gathered";
import { Other } from "./stats/Other";
import { StatsError } from "./stats/StatsError";
import { Header } from "./Header";

export const Stats = () => {
  const { user: paramUser } = useParams();
  const { isPrivate, stats, generalStats, hourStats, isError, isLoading } =
    useFetchStats(paramUser);

  const { setUser } = useContext(UserContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setUser(paramUser ?? "");
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <StatsError />;
  }

  return (
    <>
      <Header />
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
                  src={generalStats.avatar}
                  alt="Foto de perfil"
                  className="w-32 h-32 border-4 border-white "
                />
                <div className="absolute inset-0 border-2 border-white  pointer-events-none"></div>
              </div>

              <h1 className="text-3xl font-bold ml-8 mt-2 Roboto-bold">
                {generalStats.name}
              </h1>
            </div>
            <h1 className="text-3xl font-bold content-center">
              {Math.round(hourStats * 100) / 100} {t("stats.titles.hours")}
            </h1>
          </div>
        </header>
        <main className="container mx-auto py-8 px-8 mt-11">
          <div className="container mx-auto">
            <div className="text-center mb-6">
              <InputSearch />
            </div>
            <Pvp stats={stats} />

            <div className="container mx-auto mt-8 text-center w-4/6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Recuadro 1 */}
                <Kill stats={stats} />

                {/* Recuadro 2 */}
                <Bow stats={stats} />

                {/* Recuadro 3 */}
                <div className="container mx-auto mt-8">
                  <div className="grid grid-cols-1 gap-4">
                    {/* Recuadro 1 */}
                    <Shotgun stats={stats} />

                    {/* Recuadro 2 */}
                    <Exposure stats={stats} />
                  </div>
                </div>
              </div>
            </div>
            <Gathered stats={stats} />
            <Other stats={stats} />
          </div>
        </main>
      </div>
    </>
  );
};
