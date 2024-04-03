document.getElementById('add-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const title = document.getElementById('task-title').value;
    const details = document.getElementById('task-details').value;

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-title">${title}</span>
        <span class="task-details">${details}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);

  
    li.querySelector('.edit-btn').addEventListener('click', function() {
        editTask(this.parentElement);
    });
    
    li.querySelector('.delete-btn').addEventListener('click', function() {
        deleteTask(this.parentElement);
    });

    document.getElementById('task-title').value = '';
    document.getElementById('task-details').value = '';
}



function deleteTask(taskItem) {
    taskItem.remove();
}

