// Задание 1
// Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5

let num = 1;

const message = () => {
    console.log('Сообщение номер ' + num);
    num++;
}

const messageInterval = setInterval ((message), 2000);

setTimeout(() => {
    clearInterval(messageInterval);
}, 10000); 




// Задание 2
// Сделать виджет - цифровые часы, оформить по желанию.
// Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.

// забираю дату (new Date().toLocalTimeString())
//     now.getHours
//     .textContent

const numberWatch = () => {
    const date = new Date().toLocaleTimeString();
    const watch = document.querySelector('p');
    watch.textContent = date;
    setTimeout(numberWatch, 1000);
  }

  numberWatch()



// Задание 3
// По данному url расположена задача:
// https://jsonplaceholder.typicode.com/todos/1
// В html предусмотреть <div></div>
// Достать с сервера заголовок задачи и отобразить его в div.

const renderHeading = (task) => {
    const h1 = document.createElement('h1');
    h1.textContent = task.title;
    document.querySelector('div').append(h1);
}

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

xhr.send();

xhr.onload = function() {
  const task = JSON.parse(xhr.response);
  console.log(task);
  renderHeading(task);
};




// Задание 4
// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

const ul = document.querySelector('ul');

const renderList = (tasks) => {
    for (var i = 0; i < 20; i++) {
        const li = document.createElement('li');
        li.textContent = tasks[i].title;
        ul.append(li);
    }  
}

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.onload = function() {
  const tasks = JSON.parse(xhr.response);
  console.log(tasks);
  renderList(tasks);
};