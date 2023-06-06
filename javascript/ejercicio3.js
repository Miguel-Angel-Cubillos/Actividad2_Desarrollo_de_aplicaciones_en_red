function findVowels() {
    const phrase = document.getElementById('phrase').value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const foundVowels = [];
  
    for (let char of phrase) {
      if (vowels.includes(char) && !foundVowels.includes(char)) {
        foundVowels.push(char);
      }
    }
  
    let result = 'Vocales encontradas en la frase:<br>';
    for (let vowel of foundVowels) {
      result += vowel.toUpperCase() + '<br>';
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
  }
  