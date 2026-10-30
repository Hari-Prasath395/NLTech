let month = "January";
let year = 2024;

switch (month.toLowerCase().trim()) {
  case "january":
    console.log("The month Jan has 31 day");
    if (year % 2 == 0) {
      console.log("This is a even year");
    } else {
      console.log("This is a even year");
    }
    break;

  case "january":
    console.log("The month Feb has 28 day");
    if (year % 2 == 0) {
      console.log("This is a even year");
    } else {
      console.log("This is a even year");
    }
    break;

  default:
    console.log("Please provide the correct month...");
}
