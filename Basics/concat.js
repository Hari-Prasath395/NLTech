let a = 100;
let b = 200;

let c = a + b;
console.log(c);
let d = a - b;
console.log(d);

console.log("**********************************************");

let x = "Hello";
let y = "Playwright";

console.log(x + y); // Output: HelloPlaywright
console.log(a + b + x + y); // Output: 300HelloPlaywright (numbers are added first, then concatenated with strings)
console.log(x + y + a + b); // Output: HelloPlaywright100200 (strings are concatenated first, then numbers are added)
console.log(x + y + (a + b)); // Output: HelloPlaywright300 (numbers are added first, then concatenated with strings ,because of parentheses)
console.log(x + y + a + b + x + y); // Output: HelloPlaywright100200HelloPlaywright (strings are concatenated first, then numbers are added, then concatenated with strings)
console.log(x + y + (a + b) + x + y); // Output: HelloPlaywright300HelloPlaywright (numbers are added first, then concatenated with strings ,because of parentheses)
console.log(a + b + x + y + a + b); // Output: 300HelloPlaywright100200HelloPlaywright (numbers are added first, then concatenated with strings, then numbers are added, then concatenated with strings)
console.log(a + b + x + y + (a + b)); // Output: 300HelloPlaywright300 (numbers are added first, then concatenated with strings ,because of parentheses)

console.log("**********************************************");

console.log("The value of a is: " + a); // Output: The value of a is: 100
console.log("The value of a and b is:" + a + b); // Output: The value of a and b is:100200 (numbers are concatenated as strings)
console.log("The value of a and b is:" + (a + b)); // Output: The value of a and b is:300 (numbers are added first, then concatenated with strings ,because of parentheses)
console.log(true + "hello" + false); // Output: truehellofalse (boolean values are converted to strings and concatenated)
console.log(true + 1 + "hello" + false); // Output: 2hellofalse (boolean true is converted to 1, then added to 1, then concatenated with strings)
console.log(45.33 + 23.33 + x + y + a + b); // Output: 68.66HelloPlaywright (numbers are added first, then concatenated with strings)
