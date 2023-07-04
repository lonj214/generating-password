// Assignment code here

const passwordGenerator = document.getElementById("Password");
const minNumOfChars = 8;
const maxNumOfChars = 128;

const specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function validatePasswordLength(userChoice) {
  console.log(userChoice)
   var minNumOfChars = 8;
  var maxNumOfChars = 128;
  if(userChoice < minNumOfChars) {
    alert("Must be at least 8 characters long.");
    return false
  }
  if(userChoice > maxNumOfChars){
    alert("Cannot be longer than 128 characters.");
    return false
  } 
  if(isNaN(userChoice)){
    alert("Needs to be a number")
    return false
  }
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
