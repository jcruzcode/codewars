// Break camelCase (6 kyu)
function solution(string) {
    if (string === '') return '';
  
    const letters = string.split('');
  
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] !== letters[i].toLowerCase()) {
        letters[i] = ` ${letters[i]}`;
      }
    }
  
    const broken = letters.join('');
    return broken;
  }