export function secondsToHHMMSS(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;
  
    var result = "";
  
    if (hours > 0) {
      result += hours + (hours === 1 ? " hour, " : " hours, ");
    }
  
    if (minutes > 0) {
      result += minutes + (minutes === 1 ? " min, " : " mins, ");
    }
  
    result += remainingSeconds + " seconds";
  
    return result;
  }