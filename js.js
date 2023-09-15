// Get days in year
function getDaysInYear(year) {

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366;
} else {
    return 365;
 }
}
console.log(getDaysInYear(2021));
console.log(getDaysInYear(2020));

// Return day number from date

function getDayNumber(dateString) {
  const date = new Date(dateString);
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const timeDifference = date - startOfYear;
  const dayNumber = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  return dayNumber;
}
console.log(getDayNumber("2023-01-12")); 
console.log(getDayNumber("2023-02-26")); 

// Get fiscal quarters

function getQuarters(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  if (date.getMonth() >= 0 && date.getMonth() <= 2) {
    return `${month} ${day} is I quarter`;
  } else if (date.getMonth() >= 3 && date.getMonth() <= 5) {
    return `${month} ${day} is II quarter`;
  } else if (date.getMonth() >= 6 && date.getMonth() <= 8) {
    return `${month} ${day} is III quarter`;
  } else {
    return `${month} ${day} is IV quarter`;
  }
}

console.log(getQuarters("2023-02-26"));

