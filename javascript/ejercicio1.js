function checkPalindrome() {
    const inputText = document.getElementById('input-text').value.toLowerCase();
    const resultDiv = document.getElementById('result');
  
    const reversedText = inputText.split('').reverse().join('');
  
    if (inputText === reversedText) {
      resultDiv.textContent = 'La cadena es un palíndromo.';
    } else {
      resultDiv.textContent = 'La cadena no es un palíndromo.';
    }
  }
  