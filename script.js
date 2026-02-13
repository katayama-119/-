// work report app logic

// This script handles the initial setup and logic for the work report application.

function generateWorkReport(employeeName, tasksCompleted, workHours) {
    const report = `Employee: ${employeeName}\nTasks Completed: ${tasksCompleted.join(', ')}\nTotal Work Hours: ${workHours}`;
    console.log(report);
    return report;
}

// Example usage
const employeeName = 'John Doe';
const tasksCompleted = ['Task 1', 'Task 2', 'Task 3'];
const workHours = 8;
generateWorkReport(employeeName, tasksCompleted, workHours);
