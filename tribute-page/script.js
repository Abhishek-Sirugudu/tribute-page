console.log("Hello Abhiii! The script is running");


const projectName = "Tribute Page project";
let cur_day = 4;

console.log("Project Name:", projectName);
console.log("Current Day:", cur_day);

cur_day = 5

console.log("Next day",cur_day);

console.log("--- Day 6: Functions and Objects ---");

// --- Functions Practice ---
// This defines a function named 'add' that takes two parameters, 'a' and 'b'
function add(a, b) {
    return a + b; // It returns their sum
}

// This calls the function with the arguments 5 and 10, and stores the result
const sum = add(5, 10);
console.log("The result of the add function is:", sum); // Should be 15

// --- Objects Practice ---
// This creates an object to represent a user
const user = {
    name: "Abhishek",
    dayOfJourney: 6,
    isCoding: true,

    // A function inside an object is called a "method"
    greet: function() {
        console.log("Hello, my name is " + this.name); // 'this' refers to the object itself
    }
};

// Accessing properties of the object using dot notation
console.log("User's Name:", user.name);
console.log("Is the user coding?", user.isCoding);

// Calling the object's method
user.greet(); // Should print "Hello, my name is Abhishek"

console.log("--- Day 7: Asynchronous JavaScript ---");

// We create a new Promise. It takes a function with two arguments: resolve and reject.
const myFirstPromise = new Promise((resolve, reject) => {
    console.log("Promise started... (This will take 2 seconds)");

    // setTimeout simulates a network request or other long task
    setTimeout(() => {
        // After 2 seconds, we "fulfill" the promise by calling resolve()
        resolve("Success! The data has arrived."); 
    }, 2000);
});

console.log("This message appears immediately, while the promise is still pending.");

// We use the .then() method to run code AFTER the promise is fulfilled.
// The value we passed to resolve() is given to us here.
myFirstPromise.then((message) => {
    console.log("Promise fulfilled!");
    console.log(message); // Prints "Success! The data has arrived."
});

console.log("--- Day 8: Modern Async/Await ---");

// This function returns a promise that resolves after a delay
function getDelayedMessage() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Success from async/await!");
        }, 2000);
    });
}

// We create an async function to use the await keyword
async function runAsyncCode() {
    console.log("Async function started...");
    try {
        // The 'await' keyword pauses here until the promise is fulfilled
        const message = await getDelayedMessage(); 
        console.log("Promise fulfilled!");
        console.log(message); // This line only runs after the delay
    } catch (error) {
        console.error("An error occurred:", error);
    }
    console.log("Async function finished.");
}

// Call the async function
runAsyncCode();