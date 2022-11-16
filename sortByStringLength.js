function sortByStringLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// Path: sortByStringLength.js
console.log(sortByStringLength(["Google", "Apple", "Microsoft"])); // ['Apple', 'Google', 'Microsoft']
