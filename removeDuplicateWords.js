function removeDuplicateWords(s) {
  return [...new Set(s.split(" "))].join(" ");
}

input =
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";

console.log(removeDuplicateWords(input));
