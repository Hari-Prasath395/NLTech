//while loop

//print numbers from 1 to 10

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

let flag = false;

// If flag is true, the while loop executes.
// If flag is false, the while loop will not execute.

while (flag) {
  console.log("Welcome JS.....");
}

console.log("How Are you ?....");

/**
 * Explanation:
- flag = false: The while condition is false, so the loop body will not execute even once.
- flag = true: The while condition is true, so the loop keeps executing.
- Since there is no condition update inside the loop, it becomes an infinite loop.
- The statement after the loop executes only when the loop terminates.
 */

// In JavaScript, 1 is a truthy value.
// Therefore, this loop executes infinitely.
/*
while (1) {
  console.log("Welcome JS.....");
}
  */

console.log("How Are you ?....");

let count = 1;

while (true) {
  console.log("Welcome JS.....");

  count++;

  // Stop the loop when count reaches 4.
  if (count === 4) {
    break;
  }
}

console.log("How Are you ?....");
/*
In JavaScript, while() accepts a condition that is evaluated as true or false.
Value	Boolean result	Loop execution
while(true)	              true	                   Infinite loop
while(false)	          false	                   0 times
while(1)	              true	                   Infinite loop
while(0)	              false	                   0 times
while("Hello")	          true	                   Infinite loop
while("")	              false	                   0 times
while(null)	              false	                   0 times
while(undefined)	      false	                   0 times
*/

let j = 1;

while (j < 100) {
  console.log(j);
  if (j % 5 == 0) {
    console.log(j + " " + "is divisible by 5");
  }
  j++;
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Initialization: i = 1
// Condition: i <= 10
// Update: Not provided (i++ is missing)

/*
for (let i = 1; i <= 10; ) {
  console.log(i);

  // Since i is not incremented or updated,
  // its value always remains 1.
  // Therefore, the condition i <= 10 is always true.
  // This creates an infinite loop.
}
  */

// Initialization: Not provided
// Condition: Not provided
// Update: Not provided
//
// When the condition is omitted, JavaScript treats it as true.
// Therefore, this creates an infinite loop.

/*
for (;;) {

    console.log("Welcome JS........");

}
 */
// Initialization: Not provided
// Condition: 5
// Update: Not provided
//
// In JavaScript, 5 is a truthy value.
// Therefore, the condition is always true.
// This creates an infinite loop.

/*
for (; 5; ) {
  console.log("Welcome JS........");
}
  */

for (; 5; ) {
  console.log("Welcome JS........"); //executed 1 time
  break;
}

//even or odd using for loop

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i + " " + "even number");
  } else {
    console.log(i + " " + "odd number");
  }
}

//print numbers from 10 to 1 in reverse order

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//3. do while loop : execute the statement once and then check the condition
