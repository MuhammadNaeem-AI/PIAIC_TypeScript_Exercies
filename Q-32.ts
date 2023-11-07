//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.
//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Create a list of current usernames
let current_users: string[] = ["Naeem", "Asif", "Naveed", "Hassan", "Zaheer"];

// Create a list of new usernames
let new_users: string[] = ["Rizwan", "Naveed", "Imran", "Hina", "Zaheer"];

// Convert current usernames to lowercase for case-insensitive comparison
let lowercase_current_users: string[] = current_users.map(user => user.toLowerCase());

// Loop through the new_users list
for (let new_user of new_users) {
  // Convert the new username to lowercase for case-insensitive comparison
  let lowercase_new_user = new_user.toLowerCase();

  // Check if the lowercase new username is in the lowercase current usernames
  if (lowercase_current_users.includes(lowercase_new_user)) {
    console.log(`The username "${new_user}" is not available. Please enter a new username.`);
  } else {
    console.log(`The username "${new_user}" is available.`);
  }
}
