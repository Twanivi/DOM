const form = document.querySelector('form');
const input = form.querySelector('.form-control');
const ul = document.querySelector('.list-group');

let tasks = [];

const renderTask = (taskText, parent) => {
  const taskId = Date.now().toString(); // уникальный код для каждой task
  tasks.push({ id: taskId, text: taskText, status: false });

  parent.innerHTML += `
        <li class="list-group-item" data-task-id="${taskId}">
            <label class="form-check-label"> <input class="form-check-input me-3" type="checkbox">${taskText}</label> <button class="btn btn-outline-danger delete">Удалить</button>
        </li>
        `;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const markAsDone = (tasksElements) => {
  tasksElements.forEach((li, i) => {
    const checkbox = li.querySelector('.form-check-input');
    checkbox.checked = tasks[i].status;
    li.classList.toggle('list-group-item-success', tasks[i].status);

    checkbox.addEventListener('change', () => {
      tasks[i].status = checkbox.checked;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      li.classList.toggle('list-group-item-success', checkbox.checked);
    })
  })
}

const deleteTask = (deleteBtns) => {
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const taskElement = btn.closest('li');
      const taskId = taskElement.dataset.taskId;

      taskElement.remove();
      // удалить элемент (li) из массива
      tasks = tasks.filter((item) => item.id !== taskId);
      // перезаписать измененный массив в js
      localStorage.setItem('tasks', JSON.stringify(tasks));
    })
  })
}

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(item => {
    renderTask(item.text, ul);
  })
  markAsDone(ul.querySelectorAll('.list-group-item'));
  deleteTask(ul.querySelectorAll('.delete'));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderTask(input.value, ul);
  input.value = '';
  markAsDone(ul.querySelectorAll('.list-group-item'));
  deleteTask(ul.querySelectorAll('.delete'));
})
