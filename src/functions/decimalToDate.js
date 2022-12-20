export const decimal2HHMISS = function (decimal) {
    let n = new Date(0, 0);
    n.setSeconds(decimal * 60 * 60);
    return n.toTimeString().slice(0, 8);
};