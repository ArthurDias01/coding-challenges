const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

// create an array of random numbers
const randomNumbers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);

// sort the array
const sortedNumbers = quickSort(randomNumbers);

// print the sorted array
console.log(sortedNumbers);
// console.log(randomNumbers.sort((a, b) => a - b));
