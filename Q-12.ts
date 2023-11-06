//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Store the names of your friends in an array
const names_1: string[] = ['Asif', 'Mobeen', 'Asad', 'Raheel', 'Aman'];

// Define a common message to personalize
const commonMessage: string = "Hope you're having a great day!";

// Print personalized messages to each person
for (const name of names_1) {
  console.log(`${name}, ${commonMessage}`);
}
