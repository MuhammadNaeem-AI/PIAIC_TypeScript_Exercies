//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Create an array of countries
var countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "Japan", "France"];
// Print the list of countries
console.log("List of Countries:");
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log(country);
}
// Create a nested array of countries and cities
var itemsByCategory = [
    ["United States", "Canada", "Mexico"],
    ["New York", "London", "Tokyo", "Paris"],
    // Add more categories and items as needed
];
// Print the list of countries and cities
console.log("List of Countries and Cities:");
itemsByCategory.forEach(function (category, categoryIndex) {
    console.log("Category ".concat(categoryIndex + 1, ":"));
    category.forEach(function (item, itemIndex) {
        console.log("  ".concat(itemIndex + 1, ". ").concat(item));
    });
    console.log(); // Add a newline between categories
});
