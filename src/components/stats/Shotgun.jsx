import React from "react";
import { useTranslation } from "react-i18next";

export const Shotgun = ({ stats }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg mt-[-2rem]">
      <h2 className="text-2xl font-semibold ">
        {t("stats.titles.shotgun-hits")}
      </h2>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="text-center py-2">
          <p className="text-lg font-semibold">
            {t("stats.bow-hits.shotsfired")}
          </p>
          <p className="text-3xl">{stats.shotgun_fired}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.bow-hits.players")}</p>
          <p className="text-3xl">{stats.shotgun_hit_player}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">
            {t("stats.bow-hits.buildings")}
          </p>
          <p className="text-3xl">{stats.shotgun_hit_building}</p>
        </div>
      </div>
    </div>
  );
};
