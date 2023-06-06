function compareNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultDiv = document.getElementById('result');
  
    let message = '';
  
    if (isNaN(number1) || isNaN(number2)) {
      message = 'Ingresa valores numéricos válidos.';
    } else if (number1 > number2) {
      message = 'El primer número es mayor.';
    } else if (number1 < number2) {
      message = 'El segundo número es mayor.';
    } else {
      message = 'Los números son iguales.';
    }
  
    resultDiv.textContent = message;
  }
  