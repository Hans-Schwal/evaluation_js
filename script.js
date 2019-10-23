var regexForName = /^[A-Za-z]+$/;
var regexForMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
var regexForZip = /^\d{5}$/;

var formValidation = document.getElementById('button');
var firstName = document.getElementById('firstName');
var missFirstName = document.getElementById('missFirstName');

formValidation.addEventListener('click', validation);

function validation(event){
  if (firstName.validity.valueMissing){
    event.preventDefault();
    missFirstName.textContent = 'Prénom manquant';
    missFirstName.style.color = 'red';
  }
}













var submit = document.getElementById("confirmPassword");
// vérification de la correspondance entre le mot de passe et la confirmation du mot de passe grâce à un eventListener.
submit.addEventListener("input", function() {
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmPassword").value;
if (password === confirmPassword) {
   document.getElementById("password").style.border="2px solid green";
   document.getElementById("confirmPassword").style.border="2px solid green";
 }else{
   document.getElementById("password").style.border="2px solid red";
   document.getElementById("confirmPassword").style.border="2px solid red";
 }
});
