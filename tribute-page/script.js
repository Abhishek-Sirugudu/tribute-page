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