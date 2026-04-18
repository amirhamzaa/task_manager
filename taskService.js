const { loadTasks, saveTasks } = require("./fileHandler");
const {
    validateTitle,
    validatePriority,
    validateDate,
    generateId
} = require("./utils");

// Add Task
function addTask(title, description, priority, dueDate) {
    let tasks = loadTasks();

    if (!validateTitle(title)) {
        console.log("Error: Title cannot be empty");
        return;
    }

    if (!validatePriority(priority)) {
        console.log("Error: Priority must be Low/Medium/High");
        return;
    }

    if (!validateDate(dueDate)) {
        console.log("Error: Date must be YYYY-MM-DD");
        return;
    }

    const duplicate = tasks.find(
        t => t.title.toLowerCase() === title.toLowerCase() && t.dueDate === dueDate
    );

    if (duplicate) {
        console.log("Error: Duplicate task exists");
        return;
    }

    const newTask = {
        id: generateId(tasks),
        title,
        description,
        priority: priority.toLowerCase(),
        dueDate,
        status: "Pending"
    };

    tasks.push(newTask);
    saveTasks(tasks);

    console.log("Task added successfully!");
}

// View Tasks
function viewTasks() {
    const tasks = loadTasks();

    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }

    const order = { high: 1, medium: 2, low: 3 };
    tasks.sort((a, b) => order[a.priority] - order[b.priority]);

    tasks.forEach((t, i) => {
        console.log(`${i + 1}. [${t.id}] ${t.title} | ${t.status} | ${t.priority} | Due: ${t.dueDate}`);
    });
}

// Delete Task
function deleteTask(id) {
    let tasks = loadTasks();
    const newTasks = tasks.filter(t => t.id !== id);

    if (tasks.length === newTasks.length) {
        console.log("Task not found");
        return;
    }

    saveTasks(newTasks);
    console.log("Task deleted successfully!");
}

// Update Status
function updateStatus(id, status) {
    let tasks = loadTasks();

    const task = tasks.find(t => t.id === id);
    if (!task) {
        console.log("Task not found");
        return;
    }

    task.status = status;
    saveTasks(tasks);

    console.log("Status updated!");
}

// Search
function searchTasks(keyword) {
    const tasks = loadTasks();

    const result = tasks.filter(t =>
        t.title.toLowerCase().includes(keyword.toLowerCase()) ||
        t.status.toLowerCase().includes(keyword.toLowerCase()) ||
        t.priority.toLowerCase().includes(keyword.toLowerCase())
    );

    if (result.length === 0) {
        console.log("No tasks found.");
        return;
    }

    result.forEach(t => {
        console.log(`[${t.id}] ${t.title} | ${t.status} | ${t.priority} | Due: ${t.dueDate}`);
    });
}

module.exports = {
    addTask,
    viewTasks,
    deleteTask,
    updateStatus,
    searchTasks
};