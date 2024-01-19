//Functions in JavaScript

//Q1 - What is A Function declaration? (function definition or function statement)

function square(num) {
  return num * num;
}

//Q2 - What is A Function expression? (function expressions are assigned to variables)

const square = function (num) {
  return num * num;
}

//Q3 - What are First-class functions? (functions are treated like any other variable)
//referencing the square function
function displaySquare(fn) {
  console.log(`The square is: ${4}` + fn(4));
}

displaySquare(square); // this is a first class function*

//Q4 - What is a IIFE? (Immediately Invoked Function Expression)
//A function that is executed right after it is created
(function square(num) {
  return num * num;
})(5);

//Q5 IIFE O/P Based Question?
(function (x) {
  return (function (y) {
    console.log(x); // will return 1 because x on outer function is in the scope of inner function
  }
  )(2)
})(1);

// Q7 - Function Scope - O/P Based Question

for (let i = 0; i < 5; i++) {
  setTimeout(function () { console.log(i); }, i * 1000);
}
// with let - 0,1,2,3,4* (let is block scoped)
// with var - 5,5,5,5,5 (explain me why this is happening with var - var is function scoped meaning?
// var is hoisted to the top of the function and the value of i is 5 at the end of the loop)
// with const - 0,1,2,3,4* (const is block scoped)
// with IIFE - 0,1,2,3,4* (IIFE is block scoped)

// Q8 - Function Hoisting - O/P Based Question

functionName();

function functionName() {
  console.log("Hello World!");
}

// functions are hoisted to the top of the scope (can be called before delcared in the code)
// variables are not hoisted to the top of the scope (cannot be called before declared in the code)

// Q9 - Function Hoisting - O/P Based Question

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
}

fun();
console.log(fun()); // will be undefined (var is hoisted to the top of the function and the value of x is undefined at the time of console.log this is because when a function is hoisted (called to the top of the stack) the variable is hoisted but not the value of the variable)
// this means that for this example when function fun is called even though the variable x is global and defined before the function, the function is hoisted completely and when you redefine a variable inside a function it is hoisted to the top of the function and the value of x is undefined at the time of console.log*

// Q10 - Param vs Arguments

function square(num) { // num is the parameter
  return num * num;
}

square(4); // 4 is the argument

// Q11 - Param vs Arguments
function multiply(...num) { // num is the parameter
  return num * num;
}

var arr = [5,6];

multiply(...arr);
