const firstName = document.getElementById('firstName');

const email = document.getElementById('email');
const error = email.nextElementSibling;

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
})

const password = document.getElementById("password");

password.addEventListener("input", check);

function check() {
  password.validity.valid ?
    password.classList.add("valid") :
    password.classList.remove("valid");
}