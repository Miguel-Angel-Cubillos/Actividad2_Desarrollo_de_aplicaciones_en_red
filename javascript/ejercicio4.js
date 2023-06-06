function countVowels() {
    const phrase = document.getElementById('phrase').value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelCount = {};
  
    for (let vowel of vowels) {
      const count = phrase.split(vowel).length - 1;
      if (count > 0) {
        vowelCount[vowel] = count;
      }
    }
  
    let result = 'Apariciones de vocales:<br>';
    for (let vowel in vowelCount) {
      result += `${vowel.toUpperCase()}: ${vowelCount[vowel]}<br>`;
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
  }
  