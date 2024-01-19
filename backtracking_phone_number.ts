const phone_kb = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
  if (!digits || digits.length === 0) {
      return [];
  }

  let res: string[] = [];

  function backtracking(permutation: string, digitsRemaining: string[]) {
      if (!digitsRemaining.length) {
          res.push(permutation);
          return;
      }

      for (let letter of phone_kb[digitsRemaining[0]]) {
          backtracking(permutation + letter, digitsRemaining.slice(1));
      }
  }

  backtracking('', Array.from(digits));
  return res;
}