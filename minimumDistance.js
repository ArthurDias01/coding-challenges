// You have an array p of points on a Cartesian plane. Find and return the minimum possible Euclidian distance between two points with different indices in p.

// Example

// For p = [[0, 0], [3, 4], [1, 1]], the output should be
// minimumDistance(p) = 1.4142135623730951.

// The minimum distance is achieved between points p[1] and p[2].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer p

// An array of points in the Cartesian plane. It is guaranteed that there are at least two points with different indices in p.

// Guaranteed constraints:
// 2 ≤ p.length ≤ 100,
// p[i].length = 2,
// -100 ≤ p[i][j] ≤ 100.

// [output] float

// The minimum Euclidian distance between two points with different indices in p.

function minimumDistance(p) {
  var min = 1000000;
  for (var i = 0; i < p.length; i++) {
    for (var j = i + 1; j < p.length; j++) {
      var dist = Math.sqrt(
        Math.pow(p[i][0] - p[j][0], 2) + Math.pow(p[i][1] - p[j][1], 2)
      );
      if (dist < min) {
        min = dist;
      }
    }
  }
  return min;
}
