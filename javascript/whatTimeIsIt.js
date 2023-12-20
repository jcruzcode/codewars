// Clocky Mc Clock-Face (6 kyu)
var whatTimeIsIt = function (angle) {
  let hrStr, minStr;

  const hours = Math.floor(angle / 30);
  hours === 0 ? (hrStr = "12") : (hrStr = hours.toString());

  const degrees = angle - hours * 30;

  const mins = Math.floor(degrees * 2);
  minStr = mins.toString();

  if (hrStr.length < 2) hrStr = hrStr.padStart(2, "0");

  if (minStr.length < 2) minStr = minStr.padStart(2, "0");

  return `${hrStr}:${minStr}`;
};

console.log(whatTimeIsIt(0), "12:00");
console.log(whatTimeIsIt(90), "03:00");
console.log(whatTimeIsIt(180), "06:00");
console.log(whatTimeIsIt(270), "09:00");
console.log(whatTimeIsIt(360), "12:00");
console.log(whatTimeIsIt(359.5), "11:59");