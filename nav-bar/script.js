const button = document.querySelector("#theme-toggle");

const body = document.querySelector("body");

button.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    console.log("Theme has been changed");
});


// --- To-Do List Logic ---

// 1. Select the HTML elements we need to interact with
const todoInput = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#add-todo-btn");
const todoList = document.querySelector("#todo-list");

// 2. This array is our "source of truth". It will hold all our to-do items.
// The old way:
// const todos = ["Finish Day 5 tasks", "Tweet my progress"];

// The new, more powerful way:
const todos = [
    { text: "Finish Day 6 tasks", completed: true },
    { text: "Tweet my progress", completed: false }
];

function renderTodos() {
    // Clear the list first
    todoList.innerHTML = "";

    // We use .forEach here because it gives us both the item (todo) and its index
    todos.forEach((todo, index) => {
        // Create the <li> element
        const li = document.createElement("li");

        // Set its text from the object's 'text' property
        li.textContent = todo.text;

        // Add a 'completed' class if the task is done
        if (todo.completed) {
            li.classList.add("completed");
        }

        // *** NEW FEATURE: Add a click event to each <li> ***
        li.addEventListener("click", function () {
            // When clicked, update the 'completed' property in the array
            todos[index].completed = !todos[index].completed;

            // Then, re-render the entire list to show the change
            renderTodos();
        });

        // Add the new <li> to the <ul> in the HTML
        todoList.appendChild(li);
    });
}

// 4. Set up the event listener for the "Add Task" button
addTodoBtn.addEventListener("click", function () {
    const newTask = todoInput.value; // Get the text from the input box

    // Add the new task to our array, but only if the input isn't empty
    // Inside the addTodoBtn click listener...
    if (newTask.trim() !== "") {
        // We now push a new object to the array
        todos.push({ text: newTask, completed: false });

        todoInput.value = "";
        renderTodos();
    }
});

// 5. Initial Render: Call the function once to show the starting tasks
renderTodos();



// --- Fetch API Logic ---
// --- Modern Fetch API Logic with async/await ---
const fetchBtn = document.querySelector("#fetch-users-btn");
const userList = document.querySelector("#user-list");

// 1. Create a dedicated async function to handle fetching
async function fetchUsers() {
    console.log("Fetching users with async/await...");
    userList.innerHTML = "<li>Loading...</li>";

    // 2. Use a try...catch block for error handling
    try {
        // 3. 'await' the fetch call
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // 4. 'await' the .json() conversion
        const users = await response.json();

        // 5. Render the results
        userList.innerHTML = ""; // Clear 'Loading...'
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });

    } catch (error) {
        console.error("Failed to fetch users:", error);
        userList.innerHTML = "<li>Failed to load users.</li>";
    }
}

// 6. The event listener now has a single, clear job: call our async function
fetchBtn.addEventListener("click", fetchUsers);