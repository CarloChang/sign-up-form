const firstName = document.getElementById('firstname');

const lastName = document.getElementById('lastname');

let uniqueSpan = document.getElementById('unique');
let myInput = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let specialCharacters = document.getElementById('symbol');
let length = document.getElementById("length");
const leftSection = document.querySelector(".left-section");

const email = document.getElementById('email');

email.addEventListener("input", e => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Formato de correo inválido");
      
    } else {
      email.setCustomValidity("");
    }
});

firstName.addEventListener('input', e => {
    if (firstName.validity.patternMismatch) {
        firstName.setCustomValidity('El nombre no debe contener números o símbolos');
    } else {
        firstName.setCustomValidity('');
    }
});

lastName.addEventListener('input', e => {
      if (lastName.validity.patternMismatch) {
        lastName.setCustomValidity('El apellido no debe contener números o símbolos');
        console.log('test2')
    } else {
        lastName.setCustomValidity('');
    }
});


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
  uniqueSpan.classList.add('unique');
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
  uniqueSpan.classList.remove('unique');
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  const lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  const upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  const numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  const symbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/g;
  if(myInput.value.match(symbols)) {
    specialCharacters.classList.remove("invalid");
    specialCharacters.classList.add("valid");
  } else {
    specialCharacters.classList.remove("valid");
    specialCharacters.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
