//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt_1(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The T-shirt size is ${size} and the message on the shirt is: "${message}"`);
  }
  
  // Create different shirts using the default and custom values
  make_shirt_1(); // Large shirt with the default message
  make_shirt_1("Medium"); // Medium shirt with the default message
  make_shirt_1("Small", "TypeScript is awesome!"); // Small shirt with a custom message
  