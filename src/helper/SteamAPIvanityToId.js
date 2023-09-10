// URL base de la API de Steam para obtener estadísticas de jugadores en Rust
const API_KEY = import.meta.env.VITE_STEAM_API_KEY;

export const getSteamId = async (vanityName) => {
  const url = `https://corsproxy.io/?https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${API_KEY}&vanityurl=${vanityName}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        success: false,
        error: "There was an error",
      };
    }

    const data = await response.json();

    if (data.response && data.response.success === 1) {
      const steamId = data.response.steamid;

      console.log({ steamId });

      return {
        success: true,
        data: steamId,
      };
    }

    return {
      success: false,
      error: "User not found",
    };
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: "Unexpected error",
    };
  }
};
