// Assignment code here

var upperCase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var lowerCase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var numberDigits = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","*","&","#","$","@","%"];
var availCharacters = [];

function generatePassword() {

  var pwLength = 0;

  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    pwLength = prompt("Choose the length of your password. (From 8 to 128 charactors only.)");
    console.log(pwLength);
  }

  var upper = confirm("Would you like to use upper case letters?");
  var lower = confirm("Would you like to use lower case letters?");
  var num = confirm("Would you like to use numbers?");
  var special = confirm("Would you like to use special characters? (!,*,&,#,$,@,%)");

  if (upper) {

    for (var i=0; i < upperCase.length; i++) {
      availCharacters.push(upperCase[i]);
    }
  }

  if (lower) {
  
    for (var i=0; i < lowerCase.length; i++) {
    availCharacters.push(lowerCase[i]);
    }
  }

  if (num) {
    
    for (var i=0; i < numberDigits.length; i++) {
    availCharacters.push(numberDigits[i]);
    }
  }

  if (special) {
    
    for (var i=0; i < specialCharacters.length; i++) {
    availCharacters.push(specialCharacters[i]);
    }
  }

  console.log(availCharacters)
  
  var pass = ''
  for (var i = 0; i < pwLength; i++){
    pass+=randomize(availCharacters);
  }
    console.log(pass)
  return pass
}

function randomize(characterString) {
  var randomIndex = Math.floor(Math.random() * characterString.length);
  return characterString[randomIndex]
}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);