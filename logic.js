// Assignment code here
var specialCharacters = true;
var lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var upperCase = 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var specialCharacters = confirm ('Would you like to add special characters?');
  var lowerCase = confirm("Would you like to add lowercase letters?");
  var upperCase = confirm("Would you like to add uppercase letters?");
  var numeric = confirm("Would you like to add numeric characters?");
  var passwordLength = prompt("Choose a password length between 8 to 128 characters.");
  
  if (passwordLength < 8) {
    alert("Please type a number between 8 and 128.")
  }
  prompt("Choose a password length between 8 to 128 characters.");
  
  
  if (passwordLength > 128) {
    alert("Please type a number between 8 and 128.")
  }
  prompt("Choose a password length between 8 to 128 characters.");

  if (passwordLength === ".") {
    
    alert("You must type a character length between 8 to 128 characters.")
  }

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
