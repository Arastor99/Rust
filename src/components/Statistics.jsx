import React from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { InputSearch } from "./stats/InputSearch";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "./Header";
export const Statistics = () => {
  const { message } = useParams();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-[#0C0D0D] text-white p-4 flex flex-col justify-center items-center">
        <InputSearch />
        <div className="mt-4 text-center">
          <p className="text-lg">{t("input.ruined")}</p>
          <p className="text-lg">{message}</p>
        </div>
      </div>
    </>
  );
};
