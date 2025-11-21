// Accessing elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add a task to the list
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement('li');

        // Task text
        const taskTextNode = document.createTextNode(taskText);
        li.appendChild(taskTextNode);

        // Complete Button
        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        li.appendChild(completeBtn);

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);

        // Append the new task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
});

// Optional: Press "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
