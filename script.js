const form = document.querySelector('form');

const firstName = document.getElementById('firstname');
const firstNameError = document.getElementById('hidden-name');

const lastName = document.getElementById('lastname');
const lastNameError = document.getElementById('hidden-lastname');

const email = document.getElementById('email');
const emailError = document.getElementById('hidden-email');

const phoneNumber = document.getElementById('phone');
const phoneError = document.getElementById('hidden-phone');
const phoneLengthError = document.getElementById('hidden-length');

const password = document.getElementById("password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const specialCharacters = document.getElementById('symbol');
const length = document.getElementById("length");

const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.getElementById('hidden-cpassword');

form.addEventListener('submit', e => {
  const requiredInputs = document.querySelectorAll('input[required]');
  let hasError = false;

  requiredInputs.forEach(input => {
    if (input.validity.valueMissing) {
      const errorMessage = input.parentElement.querySelector('.required');
      errorMessage.classList.remove('hidden');
      errorMessage.classList.add('show');
      hasError = true;
    } else {
      const errorMessage = input.parentElement.querySelector('.required');
      errorMessage.classList.add('hidden');
      errorMessage.classList.remove('show');
    }

    if (!input.validity.valid) {
      e.preventDefault();
      hasError = true;
    }
  });

    if(password.value !== confirmPassword.value) {
      hasError = true
    }

  if (hasError) {
    e.preventDefault(); // Prevent form submission if any input is empty or invalid.
  }
});


firstName.addEventListener('input', () => {
  if (firstName.validity.patternMismatch) {
      firstNameError.classList.remove('hidden');
      firstNameError.classList.add('show');
      
  } else {
    firstNameError.classList.add('hidden');
    firstNameError.classList.remove('show');
  }
});

lastName.addEventListener('input', () => {
  if (lastName.validity.patternMismatch) {
    lastNameError.classList.remove('hidden');
    lastNameError.classList.add('show');
  } else {
      lastNameError.classList.add('hidden');
      lastNameError.classList.remove('show');
  }
});

email.addEventListener("input", () => {
  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(emailPattern)) {
    emailError.classList.add('hidden');
    emailError.classList.remove('show');
  } else {
    emailError.classList.remove('hidden');
    emailError.classList.add('show');
  }
});

phoneNumber.addEventListener('input', () => {
     if (phoneNumber.value.length !== 9) {
      phoneLengthError.classList.remove('hidden');
      phoneLengthError.classList.add('show');
    } else {
      phoneLengthError.classList.add('hidden');
      phoneLengthError.classList.remove('show');
    }
    
    const phonePattern = /^\d+$/;
    if (!phoneNumber.value.match(phonePattern)) {
      phoneError.classList.remove('hidden');
      phoneError.classList.add('show');
    } else {
      phoneError.classList.add('hidden');
      phoneError.classList.remove('show');
      
    }
});

function validateConfirmPassword() {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.classList.remove('hidden');
    confirmPasswordError.classList.add('show');
  } else {
    confirmPasswordError.classList.add('hidden');
    confirmPasswordError.classList.remove('show');
  }
}

password.addEventListener('input', () => {
  validateConfirmPassword();
});

confirmPassword.addEventListener('input', () => {
  validateConfirmPassword();
});


password.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

password.onblur = function() {
  document.getElementById("message").style.display = "none";
}

password.onkeyup = function() {

  const lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  const upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  const numbers = /[0-9]/g;
  if(password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  const symbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/g;
  if(password.value.match(symbols)) {
    specialCharacters.classList.remove("invalid");
    specialCharacters.classList.add("valid");
  } else {
    specialCharacters.classList.remove("valid");
    specialCharacters.classList.add("invalid");
  }

  if(password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


