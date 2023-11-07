//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Define an array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Function to show magicians
function show_magicians(magicianNames: string[]): void {
  for (let name of magicianNames) {
    console.log(name);
  }
}

// Call the function with the array of magician's names
show_magicians(magicians);
