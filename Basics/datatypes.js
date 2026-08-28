//There are 7 primitive data types in JavaScript: string, number, bigint, boolean, undefined, symbol, and null. All other types are considered objects.
//There are 2 types of data types in JavaScript: Primitive and Non-Primitive (Reference) data types. Primitive data types are immutable, while Non-Primitive data types are mutable.
//var, let, and const are used to declare variables in JavaScript. The main difference between them is their scope and mutability. 'var' has function scope and can be re-declared and updated, 'let' has block scope and can be updated but not re-declared, while 'const' has block scope and cannot be updated or re-declared.

let a = 10;
let b = 20;
let c = 45.54;

console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); // Output: 45.54

console.log(typeof a); // Output: number
console.log(typeof b); // Output: number
console.log(typeof c); // Output: number

console.log("**********************************************");

let username = "John Doe";
console.log(typeof username); // Output: string

console.log("**********************************************");

let number = "100";
console.log(typeof number); // Output: string
console.log(typeof number); // Output: number

let flag = true;

let isActive = false;
console.log(typeof flag); // Output: boolean
console.log(typeof isActive); // Output: boolean

let x;
console.log(typeof x); // Output: undefined

let y = null;
console.log(typeof y); // Output: object (this is a known quirk in JavaScript)

let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue); // Output: bigint
