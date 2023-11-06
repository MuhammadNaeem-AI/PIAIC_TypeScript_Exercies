//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings
//Tests using the lower case function
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators
//Test whether an item is in a array
//Test whether an item is not in a array

// Tests for equality and inequality with strings
let fruit_1 = 'apple';
console.log("Is the fruit 'apple'? I predict True.");
console.log(fruit_1 == 'apple');

let color = 'blue';
console.log("Is the color 'red'? I predict False.");
console.log(color == 'red');

// Tests using the lowercase function
let text = 'Hello, World!';
console.log("Is the text in lowercase 'hello, world!'? I predict True.");
console.log(text.toLowerCase() == 'hello, world!');

// Numerical tests
let num1 = 10;
let num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let sunny = true;
let warm = false;
console.log("Is it sunny and warm? I predict False.");
console.log(sunny && warm);

let rainy = true;
console.log("Is it sunny or rainy? I predict True.");
console.log(sunny || rainy);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'cherry', 'orange'];
let searchFruit = 'banana';
console.log(`Is '${searchFruit}' in the array? I predict True.`);
console.log(fruits.includes(searchFruit));

// Test whether an item is not in an array
let vegetables = ['carrot', 'broccoli', 'spinach', 'zucchini'];
let searchVegetable = 'potato';
console.log(`Is '${searchVegetable}' not in the array? I predict True.`);
console.log(!vegetables.includes(searchVegetable));
