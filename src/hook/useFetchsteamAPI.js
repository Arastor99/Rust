import { useEffect, useState } from "react";
import {
  getPlayerStats,
  getPlayerGeneral,
  getHoursPlayed,
} from "../helper/steamAPI";

import { checkProfilePrivacy } from "../helper/steamPrivateProfile";

export const useFetchStats = (steamid) => {
  const [stats, setStats] = useState([]);
  const [hourStats, setHourStats] = useState([]);
  const [generalStats, setGeneralStats] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);

  const getStats = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const [newisPrivate, newStats, newGeneralStats, newHourStats] =
        await Promise.all([
          checkProfilePrivacy(steamid),
          getPlayerStats(steamid),
          getPlayerGeneral(steamid),
          getHoursPlayed(steamid),
        ]);
      console.log(newisPrivate);
      setIsPrivate(newisPrivate);
      setStats(newStats);
      setGeneralStats(newGeneralStats);
      setHourStats(newHourStats);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getStats();
  }, []);

  return { isPrivate, stats, generalStats, hourStats, isError, isLoading };
};
