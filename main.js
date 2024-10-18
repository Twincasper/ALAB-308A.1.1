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