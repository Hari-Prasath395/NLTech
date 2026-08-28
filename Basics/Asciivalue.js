// A-Z ==> 65-90
// a-z ==> 97-122
// 0-9 ==> 48-57

console.log("The ASCII value of A is: " + "A".charCodeAt(0)); // Output: The ASCII value of A is: 65
console.log("The ASCII value of Z is: " + "Z".charCodeAt(0)); // Output: The ASCII value of Z is: 90
console.log("The ASCII value of a is: " + "a".charCodeAt(0)); // Output: The ASCII value of a is: 97
console.log("The ASCII value of ABCD is: " + "ABCD".charCodeAt(3)); // Output: The ASCII value of ABCD is: 68 (charCodeAt(3) returns the ASCII value of the character at index 3, which is D)
console.log("The ASCII value of 0 is: " + "0".charCodeAt(0)); // Output: The ASCII value of 0 is: 48
console.log("The ASCII value of 9 is: " + "9".charCodeAt(0)); // Output: The ASCII value of 9 is: 57
console.log("The ASCII value of ABCD is: " + "ABCD".charCodeAt(6)); // Output: The ASCII value of ABCD is: NaN (charCodeAt(6) returns NaN because the index is out of bounds)

console.log("A".charCodeAt(0) + "B".charCodeAt(0)); // Output: 130
