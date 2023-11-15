//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwich(...ingredients: string[]): void {
    if (ingredients.length === 0) {
        console.log("Please specify some ingredients for your sandwich.");
    } else {
        console.log("Sandwich Summary:");
        console.log("Bread, " + ingredients.join(", ") + ", Bread");
        console.log("Enjoy your sandwich!\n");
    }
}

// Call the function three times
orderSandwich("Cheese", "Ham", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss Cheese");
orderSandwich(); // This will prompt a message to specify ingredients