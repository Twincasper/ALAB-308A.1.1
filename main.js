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
primeElement.textContent = "Prime numbers: ";
document.body.appendChild(primeElement);

/*
  PEDAC
  P: Create a function called isPrime that takes an integer as a parameter, and adds all prime numbers between 1 and that number to a paragraph element.
  E: isPrime(10) should add the prime numbers 2, 3, 5, and 7 to the paragraph element.
  D: Input is an integer, output is a paragraph element with prime numbers.
  A: Check if num is less than or equal to 1, if true, return false.
  Check if divisor is greater than the square root of num, since that means we are doing looking for prime numbers,
  Add num to the paragraph and alert the user all numbers having been found.
  If num is divisible by divisor, return false.
  If num is not divisible by divisor, return the result of calling isPrime on num and divisor + 1.
*/


// const isPrime = (num) => {
  //   if (num <= 1) return false;
  //   for (let i = 2; i <= Math.sqrt(num); i++) {
    //     if (num % i === 0) return false;
    //   }
    //   setTimeout(() => {
      //     alert("All prime numbers between 1 and 10,000 have been calculated and added to the paragraph.");
      //   }, 0);
      //   return true;
      // }
      
      const isPrime = (num, divisor = 2) => {
        if (num <= 1) return false;
        if (num % divisor === 0) return false;
        
        if (divisor > Math.sqrt(num)) return true;
        return isPrime(num, divisor + 1);
      };
      
for (let i = 2; i <= 10000; i++) {
  if (isPrime(i)) primeElement.textContent += `${i} `;
}

setTimeout(() => {
  alert("All prime numbers between 1 and the provided parameter have been calculated and added to the paragraph.");
}, 0);



