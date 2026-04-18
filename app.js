const readline = require("readline");

const {
    addTask,
    viewTasks,
    deleteTask,
    updateStatus,
    searchTasks
} = require("./taskService");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {

    console.log(`
========= TASK MANAGER =========
1. Add Task
2. View Tasks
3. Search Task
4. Update Task Status
5. Delete Task
6. Exit
================================
`);

    rl.question("Enter your choice: ", choice => {

        switch (choice) {

            case "1":
                rl.question("Title: ", title => {
                    rl.question("Description: ", desc => {
                        rl.question("Priority: ", pr => {
                            rl.question("Due Date: ", date => {
                                addTask(title, desc, pr, date);
                                menu();
                            });
                        });
                    });
                });
                break;

            case "2":
                viewTasks();
                menu();
                break;

            case "3":
                rl.question("Search: ", key => {
                    searchTasks(key);
                    menu();
                });
                break;

            case "4":
                rl.question("Task ID: ", id => {
                    rl.question("New Status: ", status => {
                        updateStatus(Number(id), status);
                        menu();
                    });
                });
                break;

            case "5":
                rl.question("Task ID: ", id => {
                    rl.question("Confirm (y/n): ", ans => {
                        if (ans === "y") {
                            deleteTask(Number(id));
                        }
                        menu();
                    });
                });
                break;

            case "6":
                rl.close();
                break;

            default:
                console.log("Invalid choice");
                menu();
        }
    });
}

menu();