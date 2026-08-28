// Majorly we can use var, let and const to declare variables in JavaScript.

// var a = 10;
// console.log(a); // Output: 10

// function test() {
//   var a = 20;
//   console.log(a); // Output: 20
//   if (true) {
//     var a = 30;
//     console.log(a); // Output: 30
//   }

//   console.log(a); // Output: 30
// }

// test();

// console.log(a); // Output: 10

let a = 10;
console.log(a); // Output: 10

function test() {
  let a = 20;
  console.log(a); // Output: 20
  if (true) {
    let a = 30;
    console.log(a); // Output: 30
  }

  console.log(a); // Output: 20
}

test();

console.log(a); // Output: 10

// Redeclaration and Reassignment

var c = 10;
var c = 20; // Redeclaration is allowed
console.log(c); // Output: 20

let d = 10;
// let d = 20; // Redeclaration is not allowed, this will throw an error
d = 20; // Reassignment is allowed
console.log(d); // Output: 20

//Hoisting - Variables declared with var are hoisted to the top of their scope and initialized with undefined.
//Variables declared with let are hoisted to the top of their scope but not initialized.

console.log(e); // Output: undefined
var e = 10;

console.log(f);
let f = 20; // This will throw a ReferenceError: Cannot access 'f' before initialization

var x;
console.log(x); // Output: undefined

let y;
console.log(y); // Output: undefined

const g = 10;
g = 20;
console.log(g); // This will throw a TypeError: Assignment to constant variable.

const h = 10;
const h = 23; // This will throw a SyntaxError: Identifier 'h' has already been declared

const day;
console.log(day); // This will throw a SyntaxError: Missing initializer in const declaration

console.log(t); // This will throw a ReferenceError: t is not defined
const t = 10;

var i = 10;
let i = 20; // This will throw a SyntaxError: Identifier 'i' has already been declared
