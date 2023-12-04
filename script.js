// Assignment code here
//This code is used to store the variables necessary to ultimately create the randomly generated password.
var passwordLength = parseInt(prompt("Enter the length of the password:"));
var includeUppercase = confirm("Include uppercase letters?");
var includeLowercase = confirm("Include lowercase letters?");
var includeNumbers = confirm("Include numbers?");
var includeSpecialCharacters = confirm("Include special characters?");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var password = "";

var characterSet = ""
// The if statements here are used to create conditional statements for the code to follow depending on which characters the user wishes to use for their randomly generated password.
if (includeUppercase) {
  characterSet += uppercaseLetters;
}
if (includeLowercase) {
  characterSet += lowercaseLetters;
}
if (includeNumbers) {
  characterSet += numbers;
}
if (includeSpecialCharacters) {
  characterSet += specialCharacters;
}
// The if statement included here is used to ensure that if the password length is less than 8 or over 128 characters, an error message will pop up prompting the user to change their parameters for their desired randomly generated password.  
if (passwordLength >= 8 && passwordLength <= 128) {
  var password = generatePassword(passwordLength);
  alert("Your password is: " + password);
} else {
  
  alert("Invalid password length. Please enter a length between 8 and 128 characters.");
}
//The function here is used to set the length conditions for the password.
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }
  return password;
}
// This console.log is used to finally generate the password for the user once all of the conditions have been met. 
console.log(password);

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
