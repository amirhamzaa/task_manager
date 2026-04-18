function validateTitle(title) {
    return title && title.trim() !== "";
}

function validatePriority(priority) {
    return ["low", "medium", "high"].includes(priority.toLowerCase());
}

function validateDate(date) {
    return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

function generateId(tasks) {
    return tasks.length ? tasks[tasks.length - 1].id + 1 : 101;
}

module.exports = {
    validateTitle,
    validatePriority,
    validateDate,
    generateId
};