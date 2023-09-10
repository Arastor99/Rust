import React from "react";
import { useTranslation } from "react-i18next";

export const Bow = ({ stats }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">
        {t("stats.titles.bow-hits")}
      </h2>
      <div className="grid grid-cols-2 gap-2 ">
        <div className="text-center py-2">
          <p className="text-lg font-semibold">
            {t("stats.bow-hits.shotsfired")}
          </p>
          <p className="text-3xl">{stats.arrow_fired}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.bow-hits.players")}</p>
          <p className="text-3xl">{stats.arrow_hit_player}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">
            {t("stats.bow-hits.buildings")}
          </p>
          <p className="text-3xl">{stats.arrow_hit_building}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.bears")}</p>
          <p className="text-3xl">{stats.arrow_hit_bear}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.boars")}</p>
          <p className="text-3xl">{stats.arrow_hit_boar}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.deers")}</p>
          <p className="text-3xl">{stats.arrow_hit_stag}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.horses")}</p>
          <p className="text-3xl">{stats.arrow_hit_horse}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.chickens")}</p>
          <p className="text-3xl">{stats.arrow_hit_chicken}</p>
        </div>
      </div>
    </div>
  );
};
