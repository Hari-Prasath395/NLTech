let env = "qa";
let role = "admin";

switch (env) {
  case "qa":
    console.log("Testing in QA environment....");

    switch (role) {
      case "admin":
        console.log("Log in to the admin profile");
        break;

      case "viewer":
        console.log("Log in to the viewer profile");
        break;

      default:
        console.log("Unsupported role.....");
    }
    break;

  case "staging":
    console.log("Testing in Staging environment....");
    break;

  default:
    console.log("Unsupported environment.....");
}
