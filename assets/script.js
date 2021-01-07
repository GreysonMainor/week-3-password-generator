// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(makeItWork) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var characterSet = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!&%,*.-~<>")
var randomPassword;
var retVal = "";

function generatePassword() {
  var passwordLength = prompt("Your Password must greater than 8 characters and no more than 128. Please choose your character number.");
  if (passwordLength > 8, passwordLength > 128) {
    alert("Password does not fit parameters given. please revise.");
    return;
  }
  console.log(passwordLength)

  var uppercase = confirm("Do you want uppercase letters in your password?")
  if (uppercase) {
    alert("adding uppercase letters to the password.")
  }
  else {
    alert("No uppercase letters will be added.")
  }

  var lowercase = confirm
}
for (var i = 0; n = characterSet.length i < passwordLength; i++) {
retVal += characterSet.[Math.floor(Math.random)]
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
