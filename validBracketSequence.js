// Given a string sequence consisting of the characters '(', ')', '[', ']', '{', and '}'. Your task is to determine whether or not the sequence is a valid bracket sequence.

// The Valid bracket sequence is defined in the following way:

// An empty bracket sequence is a valid bracket sequence.
// If S is a valid bracket sequence then (S), [S] and {S} are also valid.
// If A and B are valid bracket sequences then AB is also valid.

// Example

// For sequence = "()", the output should be
// validBracketSequence(sequence) = true;
// For sequence = "()[]{}", the output should be
// validBracketSequence(sequence) = true;
// For sequence = "(]", the output should be
// validBracketSequence(sequence) = false;
// For sequence = "([)]", the output should be
// validBracketSequence(sequence) = false;
// For sequence = "{[]}", the output should be
// validBracketSequence(sequence) = true.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string sequence

// A string consisting only of the characters '(', ')', '[', ']', '{', and '}'.

// Guaranteed constraints:
// 0 ≤ sequence.length ≤ 105.

// [output] boolean

// Return true if sequence is a valid bracket sequence, otherwise return false.

function validBracketSequence(sequence) {
  var stack = [];
  var open = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  var close = {
    ")": true,
    "]": true,
    "}": true,
  };
  for (var i = 0; i < sequence.length; i++) {
    var char = sequence[i];
    if (open[char]) {
      stack.push(char);
    } else if (close[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}
