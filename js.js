// Decorator
const obj = {
  num: 1,
  sum(num) {
    return this.num + num;
  },
};

const cachesDecorator = (func) => {
  const map = new Map();
  return function (num) {
    if (!map.has(num)) {
      const result = func.call(this, num);
      map.set(num, result);
    }
    return map.get(num);
  };
};

const sum = function (num) {
  return this.num + num;
};

const decoratedSum = cachesDecorator(sum);
console.log(decoratedSum.call(obj, 2));
console.log(decoratedSum.call(obj, 2));

const decoratedSum2 = cachesDecorator(obj.sum);
console.log(decoratedSum.call(obj, 3));
console.log(decoratedSum.call(obj, 3));


// Factorial recursion
const factorial = (initialNumber) => {
  if (initialNumber === 0) {
    return 1;
  } else {
    return initialNumber * factorial(initialNumber - 1);
  }
};

const result = factorial(5);
console.log(result);

// Fibonacci recursion
const fib = (length) => {
  if (length <= 0) {
    return [];
  } else if (length === 1) {
    return [1];
  } else if (length === 2) {
    return [1, 1];
  } else {
    const prevFib = fib(length - 1);
    const nextValue = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
    prevFib.push(nextValue);
    return prevFib;
  }
};

const printFib = (length) => {
  const fibonacciSequence = fib(length);
  console.log(fibonacciSequence.join(' '));
};

printFib(5); // Вивід: 1 1 2 3 5

// Read List
const list = {
  title: "lesson-1",
  next: {
    title: "lesson-2",
    next: {
      title: "lesson-3",
      next: {
        title: "lesson-4",
        next: {
          title: "lesson-5",
          next: null,
        },
      },
    },
  },
};

const readList = (list) => {
  if (list) {
    console.log(list.title);
    readList(list.next);
  }
};

readList(list);




// Deep Copy 
const arr = [
  1,
  "string",
  null,
  undefined,
  { a: 15, b: 10, c: [1, 2, 3, { a: 4 }], d: undefined, e: true },
  true,
  false,
];

const deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const copyArray = [];
    for (let i = 0; i < obj.length; i++) {
      copyArray[i] = deepCopy(obj[i]);
    }
    return copyArray;
  } else {
    const copyObject = {};
    const entries = Object.entries(obj);
    for (entry of entries) {
      const [key, value] = entry;
      copyObject[key] = deepCopy(value);
    }
    return copyObject;
  }
};

const copiedArray = deepCopy(arr);
console.log(copiedArray);
