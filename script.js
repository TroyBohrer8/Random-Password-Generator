// Assignment Code
var generateBtn = document.querySelector("#generate");
var options = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+={[}]<>/?;:"

// Write password to the #password input
function askforOptions () {
  

  if (passwordLength === "" || passwordLength < 8 || passwordLength > 120){
    alert("Invaild Entry") 
      return;
  } else {(isNaN(passwordLength)) 
      alert("Invalid Entry");

  return;
    }

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passwordLength = prompt("How many characters do you want?");
  console.log(passwordLength);

 var length = passwordLength;
 var result = ''

  for (var i  = 0; i < options.length; i++) {
    result += options.charAt(Math.floor(Math.random() * length));
    return result;
  }

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

