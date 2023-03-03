function invalidInput(){
  console.log("Invalid Input");
  prompt("invalid input");
}

// Write password to the #password output box
function writePassword(){

const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~','\\', '"','\''];

// Password Option bools // ..These aren't -really- required for functionality
let IncLowerCase=false;
let IncUpperCase=false;
let IncNumeric=false;
let IncSpecial=false;
//                      //

  let PassLength = prompt("Length of password? (8 to 128 Characters)");
  let UserSelections=[];
  
  console.log("User has requested a password length of:" + PassLength + " Characters");
  if (PassLength < 8 || PassLength > 128 || isNaN(PassLength)) {
    prompt("Password needs to be between 8 and 128 characters, click 'cancel' or 'ok' to restart and try again");
    writePassword();
    return;
  }
  
   var temp= prompt("Do you want to include Lower-Case letters? (Enter 'y' or 'n')");
   if (temp == 'y' || temp == 'Y') {
    IncLowerCase = true; console.log("User wants to Include lower case letters?:" +IncLowerCase)
    //Combine user selections into single array
    UserSelections=UserSelections.concat(lowerCaseLetters);
  }
   else if (temp == 'n' || temp== 'N') {console.log("Do not include lower case letters in the password")}
   else {
    invalidInput();
    writePassword();
    return;
  }
  
   var temp= prompt("Do you want to include Upper-Case letters? (Enter 'y' or 'n')");
   if (temp == 'y' || temp == 'Y') {
    IncUpperCase = true; console.log("User wants to Include upper case letters?:" +IncUpperCase)
      //Combine user selections into single array
    UserSelections=UserSelections.concat(upperCaseLetters);
  }
   else if (temp == 'n' || temp== 'N') {console.log("Do not include lower case letters in the password");}
   else {
    invalidInput();
    writePassword();
    return;
  }
  
   var temp= prompt("Do you want to include Numeric values? (Enter 'y' or 'n')");
   if (temp == 'y' || temp == 'Y') {
    IncNumeric = true; console.log("User wants to Include numeric values?:" +IncNumeric);
     //Combine user selections into single array
    UserSelections=UserSelections.concat(numbersZeroToNine);
  }
   else if (temp == 'n' || temp== 'N') {console.log("Do not include lower case letters in the password");}
   else {
    invalidInput();
    writePassword();
    return;
  }
  
   var temp= prompt("Do you want to include Special Characters? (Enter 'y' or 'n')");
   if (temp == 'y' || temp == 'Y') {
    IncSpecial = true; console.log("User wants to Include lower case letters?:" +IncSpecial)
      //Combine user selections into single array
       UserSelections=UserSelections.concat(specialCharacters)
  }
   else if (temp == 'n' || temp== 'N') {console.log("Do not include lower special characters in the password")}
   else {
    invalidInput();
    writePassword();
    return;
  }
  
   if (IncLowerCase== false && IncUpperCase==false && IncNumeric== false && IncSpecial==false) {
    {prompt("No valid characters selected for password generation, reloading!"); console.log("No valid characters selected for password gen!"); location.reload()}
   }
  
  //Console log User selected concatenated array (testing)
  for (let index = 0; index < UserSelections.length; index++) {
    console.log(UserSelections[index]);
  }

  // program to get a random item from an array [https://www.programiz.com/javascript/examples/get-random-item]
function generatePassword(x) {

  let item;       //declare here for access outside the for loop
  let itemConcat=[];
 
  for (let index = 0; index < PassLength; index++) { 
  // get random index value
  const randomIndex = Math.floor(Math.random() * UserSelections.length);
  // get random item
  item=(UserSelections[randomIndex]);
  itemConcat= itemConcat.concat(item)

  }
  itemConcat=itemConcat.join('');
  return itemConcat;
}
  var password = generatePassword();
  var passwordText = document.querySelector(".password"); //required

  passwordText.value = password; //required
}