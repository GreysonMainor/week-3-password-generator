// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function makePassword() {
  var passwordLength = prompt("Your Password must greater than 8 characters and no more than 128. Please choose your character number.")
  if (passwordLength > 8, passwordLength > 128) {
    alert("Password does not fit parameters given. please revise.")
    return

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
