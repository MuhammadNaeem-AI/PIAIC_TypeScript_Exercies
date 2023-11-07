//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Define an array of magician's names
let magicians_1: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Function to show magicians
function show_magicians_1(magicianNames: string[]): void {
  for (let name of magicianNames) {
    console.log(name);
  }
}

// Function to add "the Great" to each magician's name
function make_Great(magicianList: string[]): void {
    for (let i = 0; i < magicianList.length; i++) {
      magicianList[i] = "the Great " + magicianList[i];
    }
  }

make_Great(magicians_1);


// Call the function with the array of magician's names
show_magicians_1(magicians_1);