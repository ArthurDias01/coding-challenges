function removeEveryOther(arr) {
  return arr.filter((_, i) => i % 2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"])); // ['Hello', 'Hello Again']
