// HOME WORK 15

// Quadratic equation
const calculate = (a, b, c) => {
    const sqrt = Math.sqrt(9);
    // console.log(sqrt);
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { x1, x2 };
    } else if (discriminant === 0) {
        const x1 = -b / (2*a);
        return { x1, x2: x1 };
    } else {
        return { x1: null, x2: null };
    }
};
const roots = calculate(1, 5, 6);
console.log(roots);

// Factorial
const factorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}
const result = factorial(5);
console.log(result);

// Calculator
const number = (callback, ...args ) => {
   if (args.length < 2) {
           return;
    }

    let result = args[0];
    for (let i = 1; i < args.length; i++) {
        result = callback(result, args[i]);
    }

    return result;
};

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

console.log(number(addition, 1, 1, 1, 1)); 
console.log(number(subtraction, 20, 10, 5));
console.log(number(multiplication, 2, 10, 2)); 
console.log(number(division, 20, 10, 2)); 

// Fibonacci

const fib = (n) => {
   if (n <= 0) {
       return;
   }

    let sequence = [1];
    let a = 0;
    let b = 1;
    for (let i = 1; i < n; i++) {
        const next = a + b;
        sequence.push(next);
        a = b;
        b = next
    }
    console.log(sequence);
}
const sequence = fib(5);

// Pyramid

const printPyramid = (n) => {
    if (n <= 0) {
           return;
    }

    for (let i = 1; i <= n; i++) {
        let row = '';
    
        for (let j = 1; j <= n - i; j++) {
            row += '#';
        }
        
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        
        for (let l = 1; l <= n - i; l++) {
            row += '#';
        }
        console.log(row);
    }
};

printPyramid(5);

