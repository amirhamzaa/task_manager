# 🧠 Task Manager (Ostad)

## 🚀 Features

* ✅ Add Task (Title, Description, Priority, Due Date)
* ❌ Prevent Duplicate Tasks (same title + same due date)
* 📋 View Tasks (sorted by priority: High → Medium → Low)
* 🔍 Search Tasks (by title, status, priority)
* 🔄 Update Task Status (Pending / In Progress / Completed)
* 🗑️ Delete Task (with confirmation)
* 💾 Auto Save to JSON file
* 📂 Load tasks on startup
* ⚠️ Input validation and error handling

---

## 📁 Project Structure

```
task-manager/
├── app.js
├── taskService.js
├── fileHandler.js
├── utils.js
└── tasks.json
```

---

## 🛠️ Technologies Used

* Node.js
* Built-in modules:

  * `fs`
  * `path`
  * `readline`

---

## ▶️ How to Run

### Step 1: Clone the Repository

```
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### Step 2: Run the Application

```
node app.js
```

---

## 📌 Usage

After running the app, you will see:

```
========= TASK MANAGER =========
1. Add Task
2. View Tasks
3. Search Task
4. Update Task Status
5. Delete Task
6. Exit
================================
```

👉 Enter a number to perform an action.

---

## 🧪 Example

### Add Task

```
Title: Fix Login Bug
Description: Login issue on Chrome
Priority: High
Due Date: 2026-04-15
```

✔ Output:

```
Task added successfully!
```

---

### Duplicate Task

```
Error: Duplicate task exists
```

---

### View Tasks

```
1. [101] Fix Login Bug | Pending | High | Due: 2026-04-15
```

---

## ⚠️ Validation Rules

* Title cannot be empty
* Priority must be: Low / Medium / High
* Due date format: YYYY-MM-DD
* ID must be numeric

