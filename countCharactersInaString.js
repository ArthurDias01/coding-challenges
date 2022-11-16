function countCharactersInaString(str) {
  const count = {};
  str.split("").forEach((char) => {
    count[char] = count[char] ? count[char] + 1 : 1;
  });

  return count;
}

input = "abaasdasdasdasdas";

console.log(countCharactersInaString(input));
