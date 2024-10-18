// Part 1 : Stack Overflow
// Our objective is to declare a global counter variable, and then create a function that increments this counter using recursion.
// Surround the initial function call in a try/catch block.
// In the catch, log the error and the value of the counter variable.

let counter = 0;

const incrementCounter = () => {
  counter++;
  incrementCounter();
}

try {
  incrementCounter();
} catch (error) {
  console.error("It's a stack overflow! The call stack is angry now.", error);
  console.log("Counter value:", counter);
}

/*
Part 2

PEDAC
P: Define a recursive function called flatten that takes an array as an argument.
E: flatten([1, [2,7,8,9], [3, [4]]]]) should return [1, 2, 7, 8, 9 , 3, 4].
D: Input is an array, potentially nested on the initial call, output is a flattened 1D array.
A: Establish an empty array 'flat'
   Iterate over arr
   If arr[i] is an array, recursively call flatten on that element, and push that into flattened
   Else, just push arr[i] into flattened
   Since we're iterating to the end, don't really need a base case here as it will end when we have no more elements to go over
   Return flat
*/
      

const flatten = (arr) => {
  const flat = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flat.push(...flatten(element));
    } else {
      flat.push(element);
    }
  });
  return flat;
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(flatten(matrix));

const trampoline = (func, ...args) => {
  let result = func(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
}

console.log(trampoline(flatten, matrix));

// Part 3

let primeElement = document.createElement("p");

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  primeElement.textContent += `${num}`;

  setTimeout(() => {
    alert("All prime numbers between 1 and 10,000 have been calculated and added to the paragraph.");
  }, 0);
}

isPrime(10000);
console.log(primeElement);


