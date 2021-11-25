var password = ""

// Password generating code

function passwordGEN() {
  var string_length=0
  var passstring=""
  // declare the different types of characters the variable can be built of
  let numericstring = "0123456789", lowerstring = "abcdefghiklmnopqrstuvwxyz", upperstring = "ABCDEFGHIJKLMNOPQRSTUVWXTZ", specialstring = "~!@#$%^&*()_-+={[}}|\:;'<>.?"
  while (passstring==""){
    window.alert("Please, pick include at least one of the following password requirements")
    let passrequirement = prompt('Would you like numbers in your password? ')
    if (passrequirement == "Y" || passrequirement== "y") {
      passstring=passstring+numericstring
    }
    passrequirement = prompt('Would you like lower case characters in your password? ')
    if (passrequirement == "Y" || passrequirement== "y") {
      passstring=passstring+lowerstring
    }
    passrequirement = prompt('Would you like upper case characters in your password? ')
    if (passrequirement == "Y" || passrequirement== "y") {
      passstring=passstring+upperstring
    }
    passrequirement = prompt('Would you like special characters in your password? ')
    if (passrequirement == "Y" || passrequirement== "y") {
      passstring=passstring+specialstring
    }
  }

  // determine if the password lenght meets the allowed range
  string_length = prompt('How long would you like your password to be? (8-128)')
  while (string_length < 8 || string_length > 128) {
    string_length = prompt('Please, pick a length between 8 and 128 characters')
  }

  // build the password using Math.random parameters
  var randm_pass = ""
//  let passstring=numericstring+lowerstring+upperstring+specialstring
  for (var i = 0; i < string_length; i++) {
    var randm_num = Math.floor(Math.random() * passstring.length)
    randm_pass += passstring.substring(randm_num, randm_num + 1)
  } 
  return randm_pass
}

// Get references to the #generate element and box message area

var generateBtn = document.querySelector("#generate");
var passwordBox = document.querySelector("#password");

// Write password to the #password input
function writePassword(){
  passwordBox.textContent = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  password=passwordGEN()
  writePassword()
})

