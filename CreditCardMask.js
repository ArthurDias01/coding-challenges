//return masked string
function maskify(cc) {
  return cc
    .split("")
    .map((letter, idx) => (idx < cc.length - 4 ? "#" : letter))
    .join("");
}

console.log(maskify("1234567890"));
