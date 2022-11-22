//Stairs Problem
//Write a function that takes a number N as an argument and returns a string that represents an N x N grid, using new-line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a staircase as shown in the example below.

//Example
//Input: 4
//Output:
//   #
//  ##
// ###
//####

//Solution
function stairs(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += " ".repeat(n - i) + "#".repeat(i) + "\n";
  }
  return result;
}

console.log(stairs(6));
