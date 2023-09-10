import React from "react";
import { useTranslation } from "react-i18next";

export const Other = ({ stats }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg my-8 w-5/6 mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {t("stats.titles.others")}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="text-center">
          <p className="text-lg font-semibold ">
            {t("stats.others.voicechat")}
          </p>
          <p className="text-3xl Roboto-bold">
            {Math.round(stats.seconds_speaking / 3600)} Hours
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.others.barrels")}</p>
          <p className="text-3xl Roboto">{stats.destroyed_barrels}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.others.rockets")}</p>
          <p className="text-3xl Roboto">{stats.rocket_fired}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.others.inventory")}</p>
          <p className="text-3xl Roboto">{stats.INVENTORY_OPENED}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.others.map")}</p>
          <p className="text-3xl Roboto">{stats.MAP_OPENED}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">{t("stats.others.wounded")}</p>
          <p className="text-3xl Roboto"> {stats.wounded}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">
            {t("stats.others.blueprints")}
          </p>
          <p className="text-3xl Roboto">{stats.blueprint_studied}</p>
        </div>
      </div>
    </div>
  );
};
