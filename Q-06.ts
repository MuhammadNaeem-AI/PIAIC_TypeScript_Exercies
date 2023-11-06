//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Store the person's name with whitespace characters
const nameWithWhitespace: string = '\t \n   Muhammad Naeem   \t \n';

// Print the name with whitespace
console.log('Name with Whitespace:', nameWithWhitespace);

// Strip leading and trailing whitespace and print
const strippedName: string = nameWithWhitespace.trim();
console.log('Stripped Name:', strippedName);
