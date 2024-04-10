function convertToRunes() {
      const inputText = document.getElementById('input').value.toUpperCase();
      const runes = {
        'A': 'ᚨ', 'B': 'ᛒ', 'C': 'ᚲ', 'D': 'ᛞ', 'E': 'ᛖ',
        'F': 'ᚠ', 'G': 'ᚷ', 'H': 'ᚺ', 'I': 'ᛁ', 'J': 'ᛃ',
        'K': 'ᚲ', 'L': 'ᛚ', 'M': 'ᛗ', 'N': 'ᚾ', 'O': 'ᛟ',
        'P': 'ᛈ', 'Q': 'ᛩ', 'R': 'ᚱ', 'S': 'ᛋ', 'T': 'ᛏ',
        'U': 'ᚢ', 'V': 'ᚢ', 'W': 'ᚹ', 'X': 'ᛪ', 'Y': 'ᛦ',
        'Z': 'ᛉ',
        ' ': ' ' // space
      };

      let outputText = '';
      for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        outputText += runes[char] || char;
      }
 document.getElementById('output').textContent = outputText;
    }
$('button').hover(
  function() {
    $(this).text('Convert');
  },
  function() {
    $(this).text('ᚲᛟᚾᚢᛖᚱᛏ');
  }
);