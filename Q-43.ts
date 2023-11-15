//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Initial list of magicians
const magicians: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];

// Function to add "the Great" to each magician's name and return a new array
function makeGreat(magicianList: string[]): string[] {
  const modifiedMagicians: string[] = [];
  for (const magician of magicianList) {
    modifiedMagicians.push("the Great " + magician);
  }
  return modifiedMagicians;
}

// Function to display the list of magicians
function showMagicians(magicianList: string[]): void {
  for (const magician of magicianList) {
    console.log(magician);
  }
}

// Call makeGreat() with a copy of the original array
const modifiedMagicians = makeGreat([...magicians]);

// Call showMagicians() with the original and modified arrays
console.log("Original Magicians:");
showMagicians(magicians);

console.log("\nModified Magicians with 'the Great':");
showMagicians(modifiedMagicians);
