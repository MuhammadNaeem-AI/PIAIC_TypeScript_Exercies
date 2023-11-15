//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type Car = {
    manufacturer: string;
    modelName: string;
    color?: string;
    optionalFeature?: string;
    // Add more optional parameters as needed
};

function createCar(manufacturer: string, modelName: string, options?: { color?: string; optionalFeature?: string }): Car {
    const car: Car = {
        manufacturer,
        modelName,
        ...options,
    };
    return car;
}

// Call the function with required information and additional optional parameters
const myCar = createCar("Toyota", "Camry", { color: "Blue", optionalFeature: "Sunroof" });

// Print the Object to verify the stored information
console.log(myCar);
