// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXTZ"
var specialChar = "~!%^&*<>"
var numbersChar = "1234567890"
var randomPassword = "";
var passGen = "";

function generatePassword() {
  var passwordLength = prompt("Your Password must greater than 8 characters and no more than 128. Please choose your character number.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password does not fit parameters given. please revise.");
    return;
  }

  var uppercase = confirm("Do you want uppercase letters in your password?");
  if (uppercase) {
    alert("adding uppercase letters to the password.");
    passGen += uppercaseChar
  } else {
    alert("No uppercase letters will be added.");
  }

  var lowercase = confirm("Do you want lowercase letters in your password?");
  if (lowercase) {
    alert("adding lowercase letters to your password.");
    passGen += lowercaseChar
  } else {
    alert("No lowercase letters will be added.");
  }

  var special = confirm("do you want special characters in your password?");
  if (special) {
    alert("adding special characters to your password.");
    passGen += specialChar
  } else {
    alert("No special characters will be added to your password.");
  }

  var numbers = confirm("do you want numbers in your password?");
  if (numbers) {
    alert("adding numbers to your password.");
    passGen += numbersChar
  } else {
    alert("no numbers will be added to your password.");
  }

  console.log(uppercase);
  console.log(lowercase);
  console.log(special);
  console.log(numbers);
  console.log(passGen);
  console.log(passwordLength);

for (i=0; i<passwordLength; i++){
randomPassword += passGen.charAt(Math.floor(Math.random()*passGen.length))
}

console.log(randomPassword);

return randomPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
