document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const tr = document.createElement('tr');

    const tdTask = document.createElement('td');
    tdTask.textContent = taskText;

    const tdAction = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(tr);
    });

    tdAction.appendChild(deleteButton);
    tr.appendChild(tdTask);
    tr.appendChild(tdAction);
    taskList.appendChild(tr);
    taskInput.value = '';
}