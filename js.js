// Filter arr
function filterRange(arr, from, to) {
  const filteredArray = arr.filter(number => number >= from && number <= to);
  return filteredArray;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = filterRange(arr, 3, 7);
console.log(result); 

// Sort arr
const arr2 = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
arr2.sort((a, b) => {
    return a - b;
});
console.log(arr2);

// Sort arr str
const strArr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
const sorted = strArr.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === "") return -1; 
  if (b === "") return 1;  
  return a.localeCompare(b); 
});

console.log(sorted);

// Calculate average age of users older then 17 and younger then 55
function averageAge(arr3) {
  const filteredUsers = arr3.filter(user => user.age > 17 && user.age < 55);

  const sumOfAges = filteredUsers.reduce((total, user) => total + user.age, 0);
  const average = sumOfAges / filteredUsers.length;
  return average;
}

const arr3 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const result2 = averageAge(arr3);
console.log(result2); 

// Sort arr by name
function sortUsers(arr4) {
  return arr4.sort((a, b) => {
    if (a.name === b.name) {
      return a.age - b.age; 
    }
    return a.name.localeCompare(b.name); 
  });
}

const arr4 = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];

const sortedArr = sortUsers(arr4);
console.log(sortedArr);

// Find min and max
function minMaxAge(arr5) {
  return arr5.reduce((result5, user) => {
    if (!result5.min || user.age < result5.min) {
      result5.min = user.age; 
    }

    if (!result5.max || user.age > result5.max) {
      result5.max = user.age;
    }

    return result5;
  }, {});
}

const arr5 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const result5 = minMaxAge(arr5);
console.log(result5); 

// Save only unique values
function unique(arr) {
  const uniqueArr = [];
  for (const value of arr) {
    if (!uniqueArr.includes(value.toUpperCase())) {
      uniqueArr.push(value.toUpperCase());
    }
  }
  return uniqueArr;
}

const strings = [
  "HELLO",
  "World",
  "JS",
  "Js",
  "HI",
  "Hello",
  "HTML",
  "CSS",
  "js",
];

const uniqueArr = unique(strings);
console.log(uniqueArr.join(', '));







