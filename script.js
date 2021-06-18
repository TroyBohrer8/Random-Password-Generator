// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()+={[}]<>/?;:";

function askforOptions () {

  var passwordLength = prompt("How many characters do you want?");
  console.log(passwordLength);

  if (passwordLength === "" || passwordLength < 8 || passwordLength > 120 || isNaN(passwordLength)){
    alert("Invaild Entry") 
      return;
  } else {
    var passwordItemsList = "";
    
    var upperCaseChoice = confirm("Do you want upper case letters?");
    if (upperCaseChoice) {
      passwordItemsList += upperCase;
    }

    var lowerCaseChoice = confirm("Do you want lower case letters?");
    if (lowerCaseChoice) {
      passwordItemsList += lowerCase;
    }

    var numbersChoice = confirm("Do you want numbers?");
    if (numbersChoice) {
      passwordItemsList += numbers;
    }

    var symbolsChoice = confirm("Do you want symbols?");
    if (symbolsChoice) {
      passwordItemsList += symbols;
    }
      return {
        length: passwordLength,
        choices: passwordItemsList
      }
  }
}

function generatePassword() {
  var options = askforOptions();
  console.log(options);

  if (!options) {
    console.log("No choice made - or wrong")
    return
  }

  var result = " "; 

  for (var i = 0; i < options.length; i++) {
    
    var randomPassword = options.choices.charAt(Math.floor(Math.random() * options.choices.length));
  
    result += randomPassword; 
  }
  return result;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

