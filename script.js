// Assignment code here
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

var characterSet = ";"
if (includeUppercase) {
  characterSet += uppercaseLetters;
  if (includeLowercase) {
    characterSet += lowercaseLetters;
  }
  if (includeNumbers) {
    characterSet += numbers;
  }
  if (includeSpecialCharacters) {
    characterSet +=specialCharacters;
  }
}

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor (Math.random() * characterSet.passwordLength);
  password += characterSet[randomIndex];
  {
    return password;
  }
}


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
