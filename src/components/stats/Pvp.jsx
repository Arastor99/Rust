import React from "react";
import { useTranslation } from "react-i18next";

export const Pvp = ({ stats }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg mb-4 w-5/6 mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">PVP</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="text-center">
          <p className="text-lg font-semibold ">{t("stats.pvp.kills")}</p>
          <p className="text-3xl Roboto-bold">{stats.kill_player}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.pvp.deaths")}</p>
          <p className="text-3xl Roboto">{stats.deaths}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">KDR</p>
          <p className="text-3xl Roboto">
            {Math.round((stats.kill_player / stats.deaths) * 100) / 100}
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.pvp.headshots")}</p>
          <p className="text-3xl Roboto">{stats.headshot}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.pvp.bullets-hits")}</p>
          <p className="text-3xl Roboto">{stats.bullet_hit_player}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">
            {t("stats.pvp.bullets-fired")}
          </p>
          <p className="text-3xl Roboto">{stats.bullet_fired}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">
            {t("stats.pvp.bullets-hit-percent")}
          </p>
          <p className="text-3xl Roboto">
            {Math.round(
              (stats.bullet_hit_player / stats.bullet_fired) * 10000
            ) / 100}{" "}
            %
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">
            {t("stats.pvp.headshot-percent")}
          </p>
          <p className="text-3xl Roboto">
            {Math.round((stats.headshot / stats.bullet_hit_player) * 10000) /
              100}
            %
          </p>
        </div>
      </div>
    </div>
  );
};
