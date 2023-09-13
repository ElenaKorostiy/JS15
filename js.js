// Pythagorean theorem

function pythagorean(a, b) {
    const c = Math.sqrt(a * a + b * b);
    return c;
}
const result = pythagorean(5, 12);
console.log(result);

// Show number in money format
function formatMoney(num) {
  const sign = num < 0 ? '-' : '+';
  const absoluteValue = Math.abs(num);
  const formattedNumber = absoluteValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `${sign} ${formattedNumber}`;
}

console.log(formatMoney(1232323)); 
console.log(formatMoney(-23.2132)); 

// Format number in spaces
function formatNumber(num) {
  const sign = num < 0 ? '-' : '+';
  const absoluteValue = Math.abs(num);
  const parts = absoluteValue.toLocaleString('en-US').split('.');
  const integerPart = parts[0].replace(/,/g, ' ');
  const formattedNumber = parts.length > 1 ? `${integerPart}.${parts[1]}` : integerPart;

  return `${sign} ${formattedNumber}`;
}

console.log(formatNumber(1232323)); // '1 232 323'
console.log(formatNumber(1223.65378)); // '1 223.654'

// Write a password generator with length n
function generatePassword(n) {
  const characters = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_\`abcdefghijklmnopqrstuvwxyz`;
  let password = '';
  const charactersLength = characters.length;

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    password += characters.charAt(randomIndex);
  }

  return password;
}

console.log(generatePassword(8)); 

// Calculate percentage with n numbers after dot
function calc(firstNum, secondNum, precision) {
  const percentage = (secondNum * 100) / firstNum;
  return percentage.toFixed(precision);
}

console.log(calc(200, 50, 0));    
console.log(calc(200, 0.14, 1));  

// Get integer part of number and decimal
function splitNumber(num) {
  const intPart = Math.floor(num);
  const decimalPart = Math.round((num - intPart) * 100); 
  return { int: intPart, decimal: decimalPart };
}

console.log(splitNumber(2));      
console.log(splitNumber(2.34));   

// Check if prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(4)); 
console.log(isPrime(5)); 

// Check if number is Armstrong Number
function isArmstrong(n) {
  const numString = n.toString();
  const numDigits = numString.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numString[i]);
    sum += Math.pow(digit, numDigits);
  }

  return sum === n;
}

console.log(isArmstrong(4));   
console.log(isArmstrong(153)); 