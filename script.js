var regexForName = /^[A-Za-zéèîïÉÈÏÎ][a-zéèêàçîï]+([-'\s][a-zA-zéèîïÉÈÏÎ][a-zéèêàçîï]+)?$/;
var regexForMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
var regexForAdress= /^\d+\s[A-z]+\s[A-z]+/;
var regexForZip = /^\d{5}$/;

var formValidation = document.getElementById('button');
var firstName = document.getElementById('firstName');
var missFirstName = document.getElementById('missFirstName');

formValidation.addEventListener('click', validation);

function validation(event){
  // vérification du champ "Prenom"
  // Si le champ est vide
  if (firstName.validity.valueMissing){
    event.preventDefault();
    missFirstName.textContent = 'Prénom manquant';
    missFirstName.style.color = 'red';
    // Si le format de données saisies par l'utilisateur ne correspond pas à la regex
  }else if (regexForName.test(firstName.value) == false){
    event.preventDefault();
    missFirstName.textContent = 'Format incorrect';
    missFirstName.style.color = 'orange';
  }else{
  }
  // Vérification du champ "Nom"
  // Déclarations de variables
  var name = document.getElementById('name');
  var missName = document.getElementById('missName');
  // Si le champ est vide
  if (name.validity.valueMissing){
    event.preventDefault();
    missName.textContent = 'Nom manquant';
    missName.style.color = 'red';
    // Si le format de données saisies par l'utilisateur ne correspond pas à la regex
  }else if (regexForName.test(name.value) == false){
    event.preventDefault();
    missName.textContent = 'Format incorrect';
    missName.style.color = 'orange';
  }else{
  }
  // Vérification du champ "Adresse"
  // Déclarations de variables
  var adress = document.getElementById('adress');
  var missAdress = document.getElementById('missAdress');
  // Si le champ est vide
  if (adress.validity.valueMissing){
    event.preventDefault();
    missAdress.textContent = 'Adresse manquante';
    missAdress.style.color = 'red';
    // Si le format de données saisies par l'utilisateur ne correspond pas à la regex
  }else if (regexForAdress.test(adress.value) == false){
    event.preventDefault();
    missAdress.textContent = 'Format incorrect';
    missAdress.style.color = 'orange';
  }else{
  }
  // Vérification du champ "Code postal"
  // Déclarations de variables
  var zip = document.getElementById('zip');
  var missZip = document.getElementById('missZip');
  // Si le champ est vide
  if (zip.validity.valueMissing){
    event.preventDefault();
    missZip.textContent = 'Code postal manquant';
    missZip.style.color = 'red';
    // Si le format de données saisies par l'utilisateur ne correspond pas à la regex
  }else if (regexForZip.test(zip.value) == false){
    event.preventDefault();
    missZip.textContent = 'Format incorrect';
    missZip.style.color = 'orange';
  }else{
  }
  // Vérification du champ "Ville"
  // Déclarations de variables
  var city = document.getElementById('city');
  var missCity = document.getElementById('missCity');
  // Si le champ est vide
  if (city.validity.valueMissing){
    event.preventDefault();
    missCity.textContent = 'Ville manquante';
    missCity.style.color = 'red';
    // Si le format de données saisies par l'utilisateur ne correspond pas à la regex
  }else if (regexForName.test(city.value) == false){
    event.preventDefault();
    missCity.textContent = 'Format incorrect';
    missCity.style.color = 'orange';
  }else{
  }
  // Vérification du champ "E-mail"
  // Déclarations de variables
  var email = document.getElementById('email');
  var missEmail = document.getElementById('missEmail');
  // Si le champ est vide
  if (email.validity.valueMissing){
    event.preventDefault();
    missEmail.textContent = 'E-mail manquant';
    missEmail.style.color = 'red';
    // Si le format de données saisies par l'utilisateur ne correspond pas à la regex
  }else if (regexForMail.test(email.value) == false){
    event.preventDefault();
    missEmail.textContent = 'Format incorrect';
    missEmail.style.color = 'orange';
  }else{
  }
  // Vérification du champ "Mot de passe"
  // Déclarations de variables
  var password = document.getElementById('password');
  var missPassword = document.getElementById('missPassword');
  // Si le champ est vide
  if (password.validity.valueMissing){
    event.preventDefault();
    missPassword.textContent = 'Mot de passe manquant';
    missPassword.style.color = 'red';
    // Si le format de données saisies par l'utilisateur ne correspond pas à la regex
  }else{
  }
  // Vérification du champ "Confirmation mot de passe"
  // Déclarations de variables
  var confirmPassword = document.getElementById('confirmPassword');
  var missConfirmPassword = document.getElementById('missConfirmPassword');
  // Si le champ est vide
  if (confirmPassword.validity.valueMissing){
    event.preventDefault();
    missConfirmPassword.textContent = 'Confirmation du mot de passe manquante';
    missConfirmPassword.style.color = 'red';
    // Si le format de données saisies par l'utilisateur ne correspond pas à la regex
  }else{
  }
}
// Déclaration de variable
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
