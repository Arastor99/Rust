import React from "react";
import { useTranslation } from "react-i18next";

export const Gathered = ({ stats }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg my-8 w-5/6 mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {t("stats.titles.gathered")}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="text-center">
          <p className="text-lg font-semibold ">{t("stats.gathered.wood")}</p>
          <p className="text-3xl Roboto-bold"> {stats.harvested_wood}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.gathered.stone")}</p>
          <p className="text-3xl Roboto"> {stats.harvested_stones}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.gathered.metal")}</p>
          <p className="text-3xl Roboto">{stats["acquired_metal.ore"]}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.gathered.scrap")}</p>
          <p className="text-3xl Roboto">{stats.acquired_scrap}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.gathered.cloth")}</p>
          <p className="text-3xl Roboto">{stats.harvested_cloth}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.gathered.leather")}</p>
          <p className="text-3xl Roboto"> {stats.harvested_leather}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">
            {t("stats.gathered.low-grade")}
          </p>
          <p className="text-3xl Roboto">{stats.acquired_lowgradefuel}</p>
        </div>
      </div>
    </div>
  );
};
