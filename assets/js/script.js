const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const selectedSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

// Password Option bools //
var IncLowerCase= false;
var IncUpperCase= false;
var IncNumeric= false;
var IncSpecial= false;
//                      //




var PassLength = prompt("Length of password? (8 to 128 Characters");



console.log("User has requested a password length of:" + PassLength + " Characters");
if (PassLength < 8 || PassLength > 128 || isNaN(PassLength)) {
  prompt("Password needs to be between 8 and 128 characters, click 'OK' to reload and try again"); 
  location.reload();
}

else {
 var temp= prompt("Do you want to include Lower-Case letters? (Enter 'y' or 'n')");
 if (temp == 'y' || temp == 'Y') {IncLowerCase = true; console.log("User wants to Include lower case letters?:" +IncLowerCase);}
 else if (temp == 'n' || temp== 'N') {console.log("Do not include lower case letters in the password");}
 else{prompt("Invalid input - page will reload!"); console.log("Invalid Input - reloading!"); location.reload();}

 var temp= prompt("Do you want to include Upper-Case letters? (Enter 'y' or 'n')");
 if (temp == 'y' || temp == 'Y') {IncUpperCase = true; console.log("User wants to Include upper case letters?:" +IncUpperCase);}
 else if (temp == 'n' || temp== 'N') {console.log("Do not include lower case letters in the password")}
 else {prompt("Invalid input - page will reload!"); console.log("Invalid Input - reloading!"); location.reload();}

 var temp= prompt("Do you want to include Numeric values? (Enter 'y' or 'n')");
 if (temp == 'y' || temp == 'Y') {IncNumeric = true; console.log("User wants to Include numberic values?:" +IncNumeric);}
 else if (temp == 'n' || temp== 'N') {console.log("Do not include lower case letters in the password")}
 else {prompt("Invalid input - page will reload!"); console.log("Invalid Input - reloading!"); location.reload();}

 var temp= prompt("Do you want to include Special Characters? (Enter 'y' or 'n')");
 if (temp == 'y' || temp == 'Y') {IncSpecial = true; console.log("User wants to Include lower case letters?:" +IncSpecial);}
 else if (temp == 'n' || temp== 'N') {console.log("Do not include lower case letters in the password")}
 else {prompt("Invalid input - page will reload!"); console.log("Invalid Input - reloading!"); location.reload();}

 if (IncLowerCase== false && IncUpperCase==false && IncNumeric== false && IncSpecial==false) {
  {prompt("No valid characters selected for password generation, reloading!"); console.log("No valid characters selected for password gen!"); location.reload();}
 };


};



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


