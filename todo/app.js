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
        if (this.innerText === "Edit") {
            editTask(this.parentElement);
        } else {
            saveTask(this.parentElement);
        }
    });

    li.querySelector('.delete-btn').addEventListener('click', function() {
        deleteTask(this.parentElement);
    });

    document.getElementById('task-title').value = '';
    document.getElementById('task-details').value = '';
}

function editTask(taskItem) {
    const titleSpan = taskItem.querySelector('.task-title');
    const detailsSpan = taskItem.querySelector('.task-details');

    const currentTitle = titleSpan.innerText;
    const currentDetails = detailsSpan.innerText;

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = currentTitle;
    const detailsInput = document.createElement('textarea');
    detailsInput.value = currentDetails;

    taskItem.replaceChild(titleInput, titleSpan);
    taskItem.replaceChild(detailsInput, detailsSpan);

    const editButton = taskItem.querySelector('.edit-btn');
    editButton.innerText = 'Save';
}

function saveTask(taskItem) {
    const titleInput = taskItem.querySelector('input');
    const detailsInput = taskItem.querySelector('textarea');

    const newTitle = titleInput.value;
    const newDetails = detailsInput.value;

    const titleSpan = document.createElement('span');
    titleSpan.className = 'task-title';
    titleSpan.innerText = newTitle;

    const detailsSpan = document.createElement('span');
    detailsSpan.className = 'task-details';
    detailsSpan.innerText = newDetails;

    taskItem.replaceChild(titleSpan, titleInput);
    taskItem.replaceChild(detailsSpan, detailsInput);

    const editButton = taskItem.querySelector('.edit-btn');
    editButton.innerText = 'Edit';
}

function deleteTask(taskItem) {
    taskItem.remove();
}
