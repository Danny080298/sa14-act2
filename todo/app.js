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
function editTask(taskItem) {
    
    const titleSpan = taskItem.querySelector('.task-title');
    const detailsSpan = taskItem.querySelector('.task-details');
    
    const currentTitle = titleSpan.innerText;
    const currentDetails = detailsSpan.innerText;

    
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = currentTitle;
    titleInput.className = 'edit-title';

    const detailsInput = document.createElement('textarea');
    detailsInput.value = currentDetails;
    detailsInput.className = 'edit-details';

  
    taskItem.replaceChild(titleInput, titleSpan);
    taskItem.replaceChild(detailsInput, detailsSpan);

    const saveChanges = () => saveTask(taskItem, titleInput, detailsInput);
    const editButton = taskItem.querySelector('.edit-btn');
    editButton.innerText = 'Save';
    editButton.onclick = saveChanges; 
    
}
function saveTask(taskItem, titleInput, detailsInput) {
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

    const saveButton = taskItem.querySelector('.edit-btn');
    saveButton.innerText = 'Edit';
    saveButton.removeEventListener('click', function() {
        saveTask(taskItem, titleInput, detailsInput);
    });
    saveButton.addEventListener('click', function() {
        editTask(taskItem);
    });
    const editButton = taskItem.querySelector('.edit-btn');
    editButton.innerText = 'Edit';
    editButton.onclick = () => editTask(taskItem);
}



function deleteTask(taskItem) {
    taskItem.remove();
}

