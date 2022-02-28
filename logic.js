// Assignment code here
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '|', '~', '^', '_'];

var userChoices = {
specialCharacters, 
lowerCase,
upperCase,
numeric,
passwordLength: false
} 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function promptPasswordLength () {
var passwordLength = prompt("Choose a password length between 8 to 128 characters.");
if (passwordLength  < 8) {
  alert("Please type a number between 8 and 128.")
  promptPasswordLength();
}


if (passwordLength > 128) {
  alert("Please type a number between 8 and 128.");
  promptPasswordLength();
} 


if (passwordLength === ".") {

  alert("You must type a character length between 8 to 128 characters.");
  promptPasswordLength();
} 
return passwordLength;

}

function generatePassword() {
  userChoices.specialCharacters = confirm ('Would you like to add special characters?');
  userChoices.lowerCase = confirm ("Would you like to add lowercase letters?");
  userChoices.upperCase = confirm("Would you like to add uppercase letters?");
  userChoices.numeric = confirm("Would you like to add numeric characters?");
  userChoices.passwordLength = promptPasswordLength();

  
}



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
