import React from "react";
import { useTranslation } from "react-i18next";

export const Exposure = ({ stats }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="text-2xl font-semibold ">{t("stats.titles.exposure")}</h2>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.exposure.cold")}</p>
          <p className="text-3xl">
            {Math.round(stats.cold_exposure_duration / 3600)}
          </p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.exposure.heat")}</p>
          <p className="text-3xl">
            {Math.round(stats.hot_exposure_duration / 3600)}
          </p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.exposure.comfort")}</p>
          <p className="text-3xl">
            {Math.round(stats.comfort_duration / 3600)}
          </p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">
            {t("stats.exposure.radiation")}
          </p>
          <p className="text-3xl">
            {Math.round(stats.radiation_exposure_duration / 3600)}
          </p>
        </div>
      </div>
    </div>
  );
};
