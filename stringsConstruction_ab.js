// Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal to a can be constructed using only letters from the string b? Each letter can be used only once and in one string only.

// Example

// For a = "abc" and b = "abccba", the output should be
// stringsConstruction(a, b) = 2.

// We can construct 2 strings a = "abc" using only letters from the string b.

// For a = "ab" and b = "abcbcb", the output should be
// stringsConstruction(a, b) = 1.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string a

// A string consisting only of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 105.

// [input] string b

// A string consisting only of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ b.length ≤ 105.

// [output] integer

// The number of strings a that can be constructed from the string b.

function stringsConstruction(a, b) {
  var count = 0;
  var aObj = {};
  var bObj = {};
  for (var i = 0; i < a.length; i++) {
    aObj[a[i]] = (aObj[a[i]] || 0) + 1;
  }
  for (var i = 0; i < b.length; i++) {
    bObj[b[i]] = (bObj[b[i]] || 0) + 1;
  }
  for (var key in aObj) {
    if (bObj[key]) {
      var temp = Math.floor(bObj[key] / aObj[key]);
      if (count === 0 || temp < count) {
        count = temp;
      }
    } else {
      return 0;
    }
  }
  return count;
}
