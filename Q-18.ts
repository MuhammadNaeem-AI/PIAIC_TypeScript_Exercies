//Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Define an array of travel destinations
let travelDestinations: string[] = ["Paris", "Japan", "New York", "United Kindom", "Istanbul"];

// Print the array in its original order
console.log("Original Order:");
console.log(travelDestinations);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:");
console.log([...travelDestinations].sort());

// Show that the array is still in its original order
console.log("Still in Original Order:");
console.log(travelDestinations);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:");
console.log([...travelDestinations].sort().reverse());

// Show that the array is still in its original order
console.log("Still in Original Order:");
console.log(travelDestinations);

// Reverse the order of your list
travelDestinations.reverse();
console.log("Reversed Order:");
console.log(travelDestinations);

// Reverse the order of your list again
travelDestinations.reverse();
console.log("Back to Original Order:");
console.log(travelDestinations);

// Sort your array in alphabetical order
travelDestinations.sort();
console.log("Sorted in Alphabetical Order:");
console.log(travelDestinations);

// Sort your array in reverse alphabetical order
travelDestinations.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:");
console.log(travelDestinations);