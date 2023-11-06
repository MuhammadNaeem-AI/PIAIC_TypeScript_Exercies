//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.


// Original guest list
const GuestList_1: string[] = ['Asif', 'Mobeen', 'Asad', 'Raheel']

// Print the original invitations
for (const guest of GuestList_1) {
    console.log(`Dear ${guest}, you are invited to a dinner gathering.`);
  }

// the guest who can't come
const guestWhoCantMakeIt: string = 'Mobeen';

// Find and display the guest who can't make it
const indexOfCancellation: number = GuestList_1.indexOf(guestWhoCantMakeIt);
if (indexOfCancellation !== -1) {
  console.log(`${guestWhoCantMakeIt} regrets that they can't make it to the dinner.`);
}

// New Guest to invite
const newGuest: string = 'Hina';

// Replace the guest who can't make it with the new guest
if (indexOfCancellation !== -1) {
    GuestList_1[indexOfCancellation] = newGuest;
}

// Print a second set of invitation messages for the remaining guests
for (const guest of GuestList_1) {
    console.log(`Dear ${guest}, you are invited to a dinner gathering.`);
}
