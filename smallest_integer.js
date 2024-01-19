let A = [1, 3, 6, 4, 1, 2];
// let A = [1, 2, 3];
// let A = [-1, -3];
// let A = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(A));
function solution(A) {
  A.sort((a, b) => a - b);
  let min = 1;

  for (let i of A) {
    if (i === min) {
      min++;
    }
  }

  return min;
}