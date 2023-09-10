// URL base de la API de Steam para obtener estadísticas de jugadores en Rust
const API_KEY = import.meta.env.VITE_STEAM_API_KEY;

export const getPlayerGeneral = async (steamId) => {
  const url = `https://corsproxy.io/?https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${API_KEY}&steamids=${steamId}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({ "Content-type": "application/json" }),
    });
    const data = await response.json();

    // Verificar si la respuesta tiene los datos de las estadísticas
    if (data) {
      const datos = {
        avatar: data.response.players[0].avatarfull,
        countrycode: data.response.players[0].loccountrycode,
        name: data.response.players[0].personaname,
        profile: data.response.players[0].profileurl,
        steamid: data.response.players[0].steamid,
      };

      return datos;
    } else {
      throw new Error("No se encontraron estadísticas para este jugador.");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener estadísticas del jugador.");
  }
};

// Función para obtener las estadísticas de un jugador en Rust

export const getPlayerStats = async (steamId) => {
  const url = `https://corsproxy.io/?https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?appid=252490&key=${API_KEY}&steamid=${steamId}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({ "Content-type": "application/json" }),
    });
    const data = await response.json();

    // Verificar si la respuesta tiene los datos de las estadísticas
    if (data) {
      const datos = {};
      for (let i = 0; i < data.playerstats.stats.length; i++) {
        let name = data.playerstats.stats[i].name;
        let value = data.playerstats.stats[i].value;
        datos[name] = value;
      }
      return datos;
    } else {
      throw new Error("No se encontraron estadísticas para este jugador.");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener estadísticas del jugador.");
  }
};

export const getHoursPlayed = async (steamId) => {
  const url = `https://corsproxy.io/?https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${API_KEY}&steamid=${steamId}&include_appinfo=1`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({ "Content-type": "application/json" }),
    });
    const data = await response.json();

    // Verificar si la respuesta tiene los datos de las estadísticas
    if (data) {
      const games = data.response.games;
      const rust = games.find((game) => game.name === "Rust");
      const rustAppID = rust.appid;
      const hours = rust.playtime_forever / 60;

      return hours;
    } else {
      throw new Error("No se encontraron estadísticas para este jugador.");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener las horas del jugador.");
  }
};
