//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Store the person's name in a variable
const YourName: string = 'Muhammad Naeem';

// Print the name in lowercase
console.log('Lowercase:', YourName.toLowerCase());

// Print the name in uppercase
console.log('Uppercase:', YourName.toUpperCase());

// Print the name in titlecase
const titleCaseName = YourName.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log('Titlecase:', titleCaseName);
