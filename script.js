// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to create a new task element
const createTaskElement = (taskText) => {
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');
    const taskTextNode = document.createTextNode(taskText);

    // Configure checkbox
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        taskItem.classList.toggle('completed', checkbox.checked);
    });

    // Configure delete button
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskItem.classList.add('removing');
        taskItem.addEventListener('animationend', () => {
            taskList.removeChild(taskItem);
        });
    });

    // Assemble task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextNode);
    taskItem.appendChild(deleteButton);

    return taskItem;
};

// Event listener for adding a task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});
