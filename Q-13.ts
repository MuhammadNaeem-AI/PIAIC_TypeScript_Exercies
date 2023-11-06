//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Create an array of favorite motorcycle makes and models
const motorcycles: string[] = ['Honda 125', 'Yamaha 150', 'Kawasaki Ninja'];

// Print statements about these motorcycles
for (const motorcycle of motorcycles) {
  console.log(`I would like to own a ${motorcycle} motorcycle.`);
}
