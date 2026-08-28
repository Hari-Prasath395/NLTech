console.log(1 + 1); // Output: 2 (numbers are added)
console.log(1 - 1); // Output: 0 (numbers are subtracted)
console.log(1 + "1"); // Output: 11 (number is converted to string and concatenated)
console.log("1" + "1"); // Output: 11 (strings are concatenated)
console.log(1 - 1); // Output: 0 (numbers are subtracted)
console.log(5 - "2"); // Output: 3 (string is converted to number and subtracted)
console.log("5" - "2"); // Output: 3 (strings are converted to numbers and subtracted)
console.log(5 * "2"); // Output: 10 (string is converted to number and multiplied)
console.log("5" * "2"); // Output: 10 (strings are converted to numbers and multiplied)
console.log(5 / "2"); // Output: 2.5 (string is converted to number and divided)
console.log("5" / "2"); // Output: 2.5 (strings are converted to numbers and divided)
console.log(5 - "Hari"); // Output: NaN (string is not a number, so the result is Not a Number)
console.log("5" - "Hari"); // Output: NaN (strings are not numbers, so the result is Not a Number)
console.log("Hari" - "5"); // Output: NaN (strings are not numbers, so the result is Not a Number )

console.log("**********************************************");

let price = 100;
console.log(price + 5); // Output: 100
console.log(price + "5"); // Output: 1005 (number is converted to string and concatenated)

// Few scenarios using zero
console.log(0 / 5); // Output: 0 (numbers are added)
console.log(5 / 0); // Output: Infinity (numbers are divided)
console.log(5.0 / 0); // Output: Infinity (numbers are divided)
console.log(0 / 0); // Output: NaN (numbers are divided)
console.log(0.0 / 0); // Output: NaN (numbers are divided)

//Modulus operator

console.log(5 % 2); // Output: 1 (numbers are divided and remainder is returned)
console.log(5.0 % 2.0); // Output: 1 (numbers are divided and remainder is returned)
