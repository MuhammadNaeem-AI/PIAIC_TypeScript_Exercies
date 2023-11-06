//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//If the person is less than 2 years old, print a message that the person is a baby.
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//If the person is age 65 or older, print a message that the person is an elder.


let personage: number = 40; // Set the person's age

if (personage < 2) {
  console.log("The person is a baby.");
} else if (personage >= 2 && personage < 4) {
  console.log("The person is a toddler.");
} else if (personage >= 4 && personage < 13) {
  console.log("The person is a kid.");
} else if (personage >= 13 && personage < 20) {
  console.log("The person is a teenager.");
} else if (personage >= 20 && personage < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}
