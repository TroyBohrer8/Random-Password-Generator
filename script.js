// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How many characters do you want?")
  console.log(passwordLength)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
