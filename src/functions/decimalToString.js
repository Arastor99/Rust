export function secondsToHHMMSS(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = Math.floor(seconds % 60); 

  let result = "";

  if (hours > 0) {
    result += hours + (hours === 1 ? " hour, " : " hours, ");
  }

  if (minutes > 0) {
    result += minutes + (minutes === 1 ? " min, " : " mins, ");
  }

  result += remainingSeconds + " seconds";

  return result;
}