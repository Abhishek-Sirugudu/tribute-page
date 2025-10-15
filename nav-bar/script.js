const button = document.querySelector("#theme-toggle");

const body = document.querySelector("body");

button.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    console.log("Theme has been changed");
});


console.log("--- Day 5: Arrays and Loops ---");

const arr = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
console.log("My tasks:");
console.log("First task",arr[0]);

console.log("Total tasks :",arr.length);

arr.push("Practice with a To-Do List");
console.log("After pushing ",arr);

console.log("all tasks :");

for(const i of arr){
    console.log("-",i);
}


// --- To-Do List Logic ---

// 1. Select the HTML elements we need to interact with
const todoInput = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#add-todo-btn");
const todoList = document.querySelector("#todo-list");

// 2. This array is our "source of truth". It will hold all our to-do items.
const todos = ["Finish Day 5 tasks", "Tweet my progress"];

// 3. This function's job is to render the 'todos' array to the screen
function renderTodos() {
    // First, clear the existing list to avoid duplicates
    todoList.innerHTML = "";

    // Loop through the 'todos' array. For each todo, create a new <li> and add it to the <ul>.
    for (const todo of todos) {
        const li = document.createElement("li"); // Create a new <li> element
        li.textContent = todo;                   // Set its text
        todoList.appendChild(li);                // Add it to the list in the HTML
    }
}

// 4. Set up the event listener for the "Add Task" button
addTodoBtn.addEventListener("click", function() {
    const newTask = todoInput.value; // Get the text from the input box

    // Add the new task to our array, but only if the input isn't empty
    if (newTask.trim() !== "") {
        todos.push(newTask);      // Add to the array
        todoInput.value = "";     // Clear the input field
        renderTodos();            // Call the render function to update the screen
    }
});

// 5. Initial Render: Call the function once to show the starting tasks
renderTodos();