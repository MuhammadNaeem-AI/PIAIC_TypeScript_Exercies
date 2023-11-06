//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Store the name of Guest in an Array to invite for dinner
const GuestList: string[] = ['Asif', 'Mobeen', 'Asad', 'Raheel', 'Aman']

// Print personalized dinner invitations
for (const guest of GuestList) {
  console.log(`Dear ${guest}, you are invited to a dinner gathering.`);
}

