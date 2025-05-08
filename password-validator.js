// Put password to test here
let password = "xxxpassword1xxx";

// See if function returns an error message or not
let message = testPassword(password);
if (message) {
   console.log(message);
}
else {
   console.log("Password accepted.");
}

function testPassword(password) {
 
   // Tests if the password is less than 10 characters
   if (password.length < 10) {
      return "Password must be at least 10 characters.";
   }
   
   // Tests if there are any spaces in the password 
   if (password.indexOf(" ") != -1) {
      return "Password may not contain a space."
   }
   
   // Tests if there are any digits in the password
   passwordDigitCount = 0;
   for (let character in password) {
      if(isSingleDigit(character)) {
         passwordDigitCount++;
      }
   }
   if (passwordDigitCount == 0) {
      return "Password must have at least one digit";
   }
   
   // Tests if password begins and ends with the same 3 characters
   if (password.substring(0,3) == password.slice(-3)) {
      return "Password may not begin and end with the same 3 characters."   
   }
   
   // Password is strong
   return "";
}

// Returns true if n is a string with a single digit, false otherwise
function isSingleDigit(n) {
   let unicodeValue = n.charCodeAt(0);
   return n.length === 1 && unicodeValue >= 48 && unicodeValue <= 57;
}
