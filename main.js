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

// Part 2 : Trampoline Optimization

// Trampoline optimization is a technique used to optimize recursive functions that cause stack overflows.

// Per Scholas Example

//  * Step One: write the recursive function.
//  * 
//  * Here, we create a function that calculates
//  * the factorial of a number, n. A factorial
//  * is the product of all positive integers
//  * less than or equal to the number, n.
//  */
// const factorial = (n) => {
//   if (n === 0) return 1; // The base case, to stop recursion
//   return n * factorial(n - 1); // The recursive call
// }

// /**
//  * If we were to call the above with a number as
//  * high as, say, 50,000, it would result in a stack
//  * overflow.
//  */

//  /**
//   * Step Two: modify the recursive function.
//   * 
//   * In order to trampoline the function, we must
//   * return another function instead of calling
//   * the recursive function itself. 
//   * 
//   * This prevents the function from being added 
//   * directly to the call stack.
//   */
//  const facto = (n, a = 1) => {
//    if (n === 0) return a;
//    return () => facto(n - 1, n * a);
//  }

//  /**
//   * Step Three: create a trampoline function.
//   * 
//   * This function takes another function and a list
//   * of arguments, and uses a linear loop rather than
//   * traditional recursion to handle the function calls.
//   * 
//   * This prevents the stack overflow, while still
//   * maintaining the declarative approach provided by
//   * recursive functions.
//   */
//  const trampoline = (f, ...args) => {
//   let result = f(...args);
//   while (typeof result === "function") {
//     result = result();
//   }
//   return result;
// }

// /**
//  * Now, we can call the factorial function with as high
//  * a number as we would like (as long as we don't run into
//  * other errors, like exceeding MAX_SAFE_INTEGER, or looping
//  * too many times...).
//  * 
//  * Unfortunately, both of these are the case here, but
//  * the principle of trampolining holds!
//  */
// console.log(trampoline(facto(10000)))

// Our task is to write a recursive function that flattens a nested array, and then trampoline the recursive calls so they run linearly.

// PEDAC
/*
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