import React from "react";
import { useTranslation } from "react-i18next";
export const Kill = ({ stats }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{t("stats.pvp.kills")}</h2>
      <div className="grid grid-cols-2 gap-2 ">
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.scientists")}</p>
          <p className="text-3xl">{stats.kill_scientist}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.boars")}</p>
          <p className="text-3xl">{stats.kill_boar}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.bears")}</p>
          <p className="text-3xl">{stats.kill_bear}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.wolfs")}</p>
          <p className="text-3xl">{stats.kill_wolf}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.chickens")}</p>
          <p className="text-3xl">{stats.kill_chicken}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.deers")}</p>
          <p className="text-3xl">{stats.kill_stag}</p>
        </div>
        <div className="text-center py-2">
          <p className="text-lg font-semibold">{t("stats.kills.horses")}</p>
          <p className="text-3xl">{stats.kill_horse}</p>
        </div>
      </div>
    </div>
  );
};
