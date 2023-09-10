import React from "react";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Header } from "./Header";
export const Privacy = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      <Helmet>
        <link rel="canonical" href="https://rust-aio.com" />
      </Helmet>
      <Navbar />
      <div className="flex justify-center py-36 min-h-screen bg-gray-800 ">
        <div className="max-w-2xl px-4">
          <p className=" text-white">
            <p className="pt-12 pb-2 font-semibold">{t("policy.privacy")}</p>
            {t("policy.text-privacy")}
            <p className="pt-12 pb-2 font-semibold">{t("policy.info")}</p>
            {t("policy.text-info")}
            <p className="pt-12 pb-2 font-semibold">{t("policy.use")}</p>
            {t("policy.text-use")}
            <p className="pt-12 pb-2 font-semibold">{t("policy.security")}</p>
            {t("policy.text-security")}
            <p className="pt-12 pb-2 font-semibold">
              {t("policy.external")}
            </p>{" "}
            {t("policy.text-external")}
            <p className="pt-12 pb-2 font-semibold">{t("policy.change")}</p>
            {t("policy.text-change")}
            <p className="pt-12 pb-2 font-semibold">{t("policy.contact")}</p>
            {t("policy.text-contact")}
          </p>
        </div>
      </div>
    </>
  );
};
