let i = 11;
let j = i++ + ++i;
console.log(j); // Output: 24
console.log(i); // Output: 13

{
  let d = 1.5;
  let D = 2.5;
  let output = d++ + ++D;

  console.log(output); // Output: 5.0
  console.log(d); // Output: 2.5
  console.log(D); // Output: 3.5
}

{
  let d = 1.5;
  let D = 2.5;
  let output = d-- + --D;

  console.log(output); // Output: 3.0
  console.log(d); // Output: 0.5
  console.log(D); // Output: 1.5
}
