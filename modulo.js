function number() {
  var number1 = document.getElementById('premier_nombre').value;
  var number2 = document.getElementById('deuxieme_nombre').value;
    if (isNaN(number1 && number2) == true) {
      alert('Vous avez fait une erreur !');
    } // condition qui empeche le client d'inscrire une valeur autre qu'une nombre.
    else if (number2 == 0) {
      alert('Vous ne pouvez pas diviser par zéro !');
    } //condition qui empeche le client d'inscrire 0 comme diviseur.
    else {
  alert(number1 % number2);
} // Condition permettant de faire le modulo de deux chiffres.
}
