// Concept: switch case in JavaScript

let browser = "chrome ";

switch (browser.toLowerCase().trim()) {
  case "chrome":
    console.log("Launch all the scripts in Chrome browser");
    break;

  case "edge":
    console.log("Launch all the scripts in Edge browser");
    break;

  case "firefox":
    console.log("Launch all the scripts in Firefox browser");
    break;

  default:
    console.log("Unsupported browser");
}

console.log("Enter the URL of the application...");

// Vowels  = a e i o u

let word = "B";
let vowels = "aeiou";
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i].toLowerCase())) {
    console.log(word[i] + " " + "is a vowel");
  } else {
    console.log(word[i] + " " + "is a consonant");
  }
}

// Practical Use Cases of Switch Cases in JavaScript

// 1. Cross-browser testing logic in an automation framework.
// 2. Cross-OS/platform logic in an automation framework.
// 3. Multi-environment testing logic (QA, UAT, Production).
// 4. Handling different payment methods (Credit Card, Debit Card, UPI).
// 5. Handling user roles (Admin, Manager, Viewer).
// 6. API automation: handling HTTP methods (GET, POST, PUT, PATCH, DELETE).

// Practical Use Cases of If-Else Statements

// 1. Voting eligibility based on age (18 years or above).
// 2. Grading systems in schools and colleges based on marks.
// 3. Login validation based on username and password.
// 4. Checking whether a number is even or odd.
// 5. Checking whether a person is eligible for a job based on age or qualifications.
// 6. Validating test results in an automation framework (Pass or Fail).
// 7. Checking whether a user has permission to access a particular page.
// 8. Validating API response status codes (Success or Failure).
