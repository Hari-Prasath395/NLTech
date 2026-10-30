// There are 2 types of increment and decrement operators in JavaScript:
// 1. Prefix
// 2. Postfix
//
// Prefix operators increment or decrement the value of a variable
// before it is used in an expression.
//
// Postfix operators increment or decrement the value of a variable
// after it is used in an expression.

// ======================================================
// INCREMENT OPERATOR
// ======================================================

// 1. Postfix Increment Operator (x++)

{
  let x = 5;

  let y = x++; // y gets 5 first, then x is incremented

  console.log("The value of x is: " + x); // Output: 6
  console.log("The value of y is: " + y); // Output: 5
}

{
  let m = -99;

  let n = m++; // n gets -99 first, then m is incremented

  console.log("The value of m is: " + m); // Output: -98
  console.log("The value of n is: " + n); // Output: -99
}

{
  let total = 1000;

  let sum = total++; // sum gets 1000 first, then total is incremented

  console.log("The value of total is: " + total); // Output: 1001
  console.log("The value of sum is: " + sum); // Output: 1000
}

{
  let s = 5;

  console.log("The value of s is: " + s++); // Output: 5
  console.log("The value of s is: " + s); // Output: 6
}

// ======================================================
// DECREMENT OPERATOR
// ======================================================

// 1. Postfix Decrement Operator (x--)

{
  let x = 5;

  let y = x--; // y gets 5 first, then x is decremented

  console.log("The value of x is: " + x); // Output: 4
  console.log("The value of y is: " + y); // Output: 5
}

{
  let m = -99;

  let n = m--; // n gets -99 first, then m is decremented

  console.log("The value of m is: " + m); // Output: -100
  console.log("The value of n is: " + n); // Output: -99
}

{
  let total = 1000;

  let sum = total--; // sum gets 1000 first, then total is decremented

  console.log("The value of total is: " + total); // Output: 999
  console.log("The value of sum is: " + sum); // Output: 1000
}

{
  let s = 5;

  console.log("The value of s is: " + s--); // Output: 5
  console.log("The value of s is: " + s); // Output: 4
}

// ======================================================
// 2. Prefix Increment Operator (++x)
// ======================================================
{
  //It means that the value of x is incremented first, and then the new value of x is used in the expression.

  let c = 20;
  let d = ++c; // d gets 21, c is also 21
  console.log("The value of c is: " + c); // Output: 21
  console.log("The value of d is: " + d); // Output: 21
}

{
  let p = -999;
  let q = ++p; // q gets -998, p is also -998
  console.log("The value of p is: " + p); // Output: -998
  console.log("The value of q is: " + q); // Output: -998
}

{
  let num = 100;
  console.log("The value of num is: " + ++num); // Output: 101
  console.log("The value of num is: " + num); // Output: 101
}

{
  let s = "5";
  let s2 = ++s; // s2 gets 6, s is also 6
  console.log("The value of s is: " + s); // Output: 6
  console.log("The value of s2 is: " + s2); // Output: 6
}

// ======================================================
// DECREMENT OPERATOR
// ======================================================

// 2. Prefix Decrement Operator (--x)

{
  let x = 5;

  let y = --x; // x is decremented first, then y gets the value

  console.log("The value of x is: " + x); // Output: 4
  console.log("The value of y is: " + y); // Output: 4
}

{
  let m = -99;

  let n = --m; // m is decremented first, then n gets the value

  console.log("The value of m is: " + m); // Output: -100
  console.log("The value of n is: " + n); // Output: -100
}

{
  let total = 1000;

  let sum = --total; // total is decremented first, then sum gets the value

  console.log("The value of total is: " + total); // Output: 999
  console.log("The value of sum is: " + sum); // Output: 999
}

{
  let s = 5;

  console.log("The value of s is: " + --s); // Output: 4
  console.log("The value of s is: " + s); // Output: 4
}
