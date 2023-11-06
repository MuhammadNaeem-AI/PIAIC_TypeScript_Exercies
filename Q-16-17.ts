//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Original guest list
const GuestList_2: string[] = ['Asif', 'Mobeen', 'Asad', 'Raheel']

// Print the original invitations
for (const guest_2 of GuestList_2) {
    console.log(`Dear ${guest_2}, you are invited to a dinner gathering.`);
  }

// the guest who can't come
const guestWhoCantMakeIt_2: string = 'Mobeen';

// Find and display the guest who can't make it
const indexOfCancellation_2: number = GuestList_2.indexOf(guestWhoCantMakeIt_2);
if (indexOfCancellation_2 !== -1) {
  console.log(`${guestWhoCantMakeIt_2} regrets that they can't make it to the dinner.`);
}

// New Guest to invite
const newGuest_2: string = 'Hina';

// Replace the guest who can't make it with the new guest
if (indexOfCancellation_2 !== -1) {
    GuestList_2[indexOfCancellation_2] = newGuest_2;
}

// Print a second set of invitation messages
for (const guest_2 of GuestList_2) {
    console.log(`Dear ${guest_2}, you are invited to a dinner gathering.`);
}

// Start for Question#16

// Inform people that you found a bigger dinner table
console.log("Great news! I found a bigger dinner table!");

// Add one new guest to the beginning of the list
const newGuestBeginning: string = "Zaman";
GuestList_2.unshift(newGuestBeginning);

// Add one new guest to the middle of the list
const newGuestMiddle: string = "Zaheer";
const middleIndex: number = Math.floor(GuestList_2.length / 2);
GuestList_2.splice(middleIndex, 0, newGuestMiddle);

// Use push() to add one new guest to the end of the list
const newGuestEnd: string = "Babar";
GuestList_2.push(newGuestEnd);

// Print the updated invitation messages
for (const guest of GuestList_2) {
  console.log(`Dear ${guest}, please join us for dinner!`);
}

//Q-17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// Inform that you can invite only two people for dinner
console.log("I'm sorry, but I can invite only two people for dinner.");

// Remove guests from the list one at a time until only two names remain
while (GuestList_2.length > 2) {
  const removedGuest = GuestList_2.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print messages to the two people still on your list
for (const guest of GuestList_2) {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
}

// Remove the last two names from the list to make it empty
GuestList_2.length = 0;

// Print your list to confirm it's empty
console.log("After removing all guests, the list is empty:", GuestList_2);
