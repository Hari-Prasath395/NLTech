// >  < == >= <= !=

let a = 10;
let b = 20;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}

{
  if (true) {
    console.log("Hello ....");
  } else {
    console.log("Bye ...."); //unreachable code ,that is dead code
  }
}

{
  if (false) {
    console.log("Hello ...."); //unreachable code ,that is dead code
  } else {
    console.log("Bye ....");
  }
}

{
  let flag = true;
  if (flag) {
    console.log("Hello ....");
  } else {
    console.log("Bye ....");
  }
}

// In JS there are 2 operatots for equality check
// 1. == (loose equality operator) : it checks only the value of the variable
// 2. === (strict equality operator) : it checks both value and type of the variable

{
  let n1 = 10;
  let n2 = 10;

  console.log(n1 == n2); // true
  console.log(n1 === n2); // true
}

{
  let n1 = 10;
  let n2 = "10";

  console.log(n1 == n2); // true
  console.log(n1 === n2); // false

  console.log(true == 1); // true
  console.log(true === 1); // false

  console.log("" == 0); // blank string is converted to 0 and then compared
  console.log("" === 0); // false
}
