// Grading System in Schools

let num = 30;

if (num >= 90) {
  console.log("A Grade");
  if (num >= 95) {
    console.log("you are eligible for scholarship");
    if (num >= 100) {
      console.log("you are a gold medalist");
    }
  }
} else {
  console.log("you are not eligible for scholarship");
  if (num >= 80) {
    console.log("B Grade");
  } else if (num >= 60) {
    console.log("C Grade");
  } else if (num >= 50) {
    console.log("D Grade");
  } else {
    console.log("Failed");
  }
}
