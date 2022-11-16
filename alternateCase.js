String.prototype.toAlternateCase = function () {
  return this.split("").map(changeCase).join("");
};

function changeCase(char) {
  return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}

console.log("HELLO WORLD".toAlternateCase());
