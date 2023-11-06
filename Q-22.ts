//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Create an array with some elements
let numbers: number[] = [1, 2, 3, 4, 5];

// Try to access an element at an out-of-bounds index
try {
  let outOfBoundsNumber = numbers[10];
  console.log(`This will not be reached because of the error.`);
} catch (error) {
  console.log(`Caught an error: ${error}`);
}

// Correct the error and access a valid index
let validNumber = numbers[2];
console.log(`Accessing a valid index: ${validNumber}`);
