function validateCreditCardNumber(n) {
  let digits = n.toString().split("").map(Number);
  let sum = 0;

  if (digits.length % 2 === 0) {
    sum = digits
      .map((digit, i) => (i % 2 === 0 ? fixDouble(digit * 2) : digit))
      .reduce((acc, digit) => (acc += digit), 0);
  } else {
    sum = digits
      .map((digit, i) => (i % 2 === 1 ? fixDouble(digit * 2) : digit))
      .reduce((acc, digit) => (acc += digit), 0);
  }

  console.log("Digits: ", digits);
  console.log("Sum: ", sum);
  return sum % 10 === 0;
}

function fixDouble(number) {
  return number > 9 ? number - 9 : number;
}

console.log(validateCreditCardNumber(1230));
