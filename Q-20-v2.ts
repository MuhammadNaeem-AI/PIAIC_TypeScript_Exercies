//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Define a type for the items in the array
type ListItem = string;

// Create a nested array of countries and cities
const itemsByCategory: ListItem[][] = [
    ["United States", "Canada", "Mexico"],
    ["New York", "London", "Tokyo", "Paris"],
    // Add more categories and items as needed
];

// Print the list of countries and cities
console.log("List of Countries and Cities:");
itemsByCategory.forEach((category, categoryIndex) => {
    console.log(`Category ${categoryIndex + 1}:`);
    category.forEach((item, itemIndex) => {
        console.log(`  ${itemIndex + 1}. ${item}`);
    });
    console.log(); // Add a newline between categories
});
