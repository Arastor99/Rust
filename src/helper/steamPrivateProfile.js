const API_KEY = import.meta.env.VITE_STEAM_API_KEY;

export const checkProfilePrivacy = async (steamId) => {
  const response = await fetch(
    `https://corsproxy.io/?https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${API_KEY}&steamids=${steamId}`
  );
  const data = await response.json();
  const player = data.response.players[0];
  return Number(player.communityvisibilitystate) == 1;
};
