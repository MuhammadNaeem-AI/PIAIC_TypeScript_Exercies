//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.

// Create an array of usernames
let usernames_1: string[] = ["admin", "Eric", "John", "Alice", "Sophia"];

// Check if the list of users is not empty
if (usernames_1.length === 0) {
  console.log("We need to find some users!");
} else {
  // Loop through the array each user
  for (let username of usernames_1) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${usernames_1}, thank you for logging in again.`);
    }
  }
}

// Remove all usernames from the array
usernames_1 = [];

// Check if the list of users is not empty after removal
if (usernames_1.length === 0) {
  console.log("We need to find some users!");
}