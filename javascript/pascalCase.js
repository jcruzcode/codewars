// (Actually, PascalCase) CamelCase Method (6 kyu)
String.prototype.camelCase = function () {
  if (this.length === 0) return "";

  const words = this.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("");
    words[i][0] = words[i][0].toUpperCase();
    words[i] = words[i].join("");
  }

  return words.join("");
};
