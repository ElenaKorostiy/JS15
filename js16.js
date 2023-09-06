// HOME WORK

// Reverse str
const reverse = (str) => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
};
const reversedString = reverse('hello');
console.log(reversedString);

// Count words
const countWords = (str) => {
   str = str.trim();
  const words = str.split(/\s+/);
  return words.length;
};

const sentence = "Hi my name is Taras";
const wordCount = countWords(sentence);
console.log(wordCount);

// Clear whitespace
const clearWhiteSpace = (str) => {
    let stringWithoutSpaces = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            stringWithoutSpaces += str[i];
        }
    }
    const trimmedStr = stringWithoutSpaces.trim();
    return trimmedStr;
};
const result = clearWhiteSpace("  1   2   ");
console.log(result);

// Max length
const cutStr = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + '...';
  }
};

console.log(cutStr("Hello", 5));        
console.log(cutStr("Hello there", 5)); 

// Palindrome
const palindrome = (str) => {
   const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
   const reversedStr = cleanedStr.split('').reverse().join('');
   return cleanedStr === reversedStr;
};

console.log(palindrome("tenet")); 
console.log(palindrome("js"));    



