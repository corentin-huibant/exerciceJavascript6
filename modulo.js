// fonction permettant de faire le modulo de deux chiffres
function number() {
  var number1 = document.getElementById('premier_nombre').value;
  var number2 = document.getElementById('deuxieme_nombre').value;
    if (isNaN(number1 && number2) == true) {
      alert('Vous avez fait une erreur !');
    }
    else if (number2 == 0) {
      alert('Vous ne pouvez pas diviser par zéro !');
    }
    else {
  alert(number1 % number2);
  }
}
