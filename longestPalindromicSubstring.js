/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  let longest = s[0];
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;
    while (s[left] === s[right + 1]) {
      right++;
    }
    while (s[left - 1] && s[left - 1] === s[right + 1]) {
      left--;
      right++;
    }
    if (right - left + 1 > longest.length) {
      longest = s.slice(left, right + 1);
    }
  }
  return longest;
};

const s = "babad";
console.log(longestPalindrome(s));
