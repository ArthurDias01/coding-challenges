
//step function (jumping the 🐇 from a hole to another)
let len = 100;
let position = Math.floor(Math.random() * len);

console.log('🐇 started at ', position)

function step() {
  const prev = position;
  if (position === len) {
    position--
  } else if (position === 0) {
    position++
  } else {
    if (Math.random() > 0.5) {
      position++
    } else {
      position--
    }
  }
  console.log(`🐇 jumped from _${prev}_ to ${position}`)
}

// naive approach (guessing onwards starting at a boundary position)
// 0 _ x R x _ _
//_ 1 _ x R x _
//_ _ 2x R x _ _
//_ x R x 3 _ _
let found = false;
let attempts = 0
for (let i = 0; i < len; i++) {
  let attempt = i;
  console.log("Gonna Check ", attempt)
  if (attempt === position) {
    found = true
    console.log(`found the 🐇 at ${position}`)
    break
  }
  step();
  console.log("🐇 jumped to ", position)
  attempts++
}

if (!found) {
  for (let i = 1; i < len; i++) {
    let attempt = i;
    if (attempt === position) {
      found = true
      console.log(`found the 🐇 at ${position}`)
      break
    }
    step();
    console.log("🐇 jumped to ", position)
    attempts++
  }
}
console.log('Total attempts ', attempts)
if (!found) {
  console.log("tough luck 😣")
}
