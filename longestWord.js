function longestWord(str) {
  // split the string into an array of words
  // iterate over the array
  // keep track of the longest word
  // return the longest word

  let words = str.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(longestWord("I went straight to the beach"));
