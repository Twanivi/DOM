// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)

console.log(window.navigator);
console.log(window.location);

console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`);



// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

const allNames = document.querySelectorAll('#list li');

allNames.forEach((item, index) => {
    console.log(item.textContent);
    item.textContent = index;
})



// Задание 3
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

const forRemove = document.querySelectorAll('ul .forRemove');
console.log(forRemove);

forRemove.forEach(el => el.remove());



// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

const paragraph = document.createElement('p');
paragraph.textContent = 'Новый параграф';
paragraph.style.fontSize = '36px';
paragraph.style.fontWeight = 'bold';

document.body.append(paragraph);



// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

const createTag = (tagName, color, content) => {
    const tag = document.createElement(tagName);
    tag.style.color = color;
    tag.textContent = content;
    return tag;
}

const h1 = createTag('h1', 'red', 'Hello');
const p = createTag('p', 'green', 'some text ');
const h2 = createTag('h2', 'yellow', 'yfgtdtrd');

console.log(h1, p, h2);
 
document.body.append(h1, p, h2);


// Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

const select = document.querySelector('select');

for(i = 1960; i <= 2020; i++){
    select.innerHTML += `<option>${i}</option>`
}



// Задание 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
];

clients.forEach(item => {
    const li = document.createElement('li');
    const status = item.order ? 'оплатил' : 'отменил';
    li.textContent = `Клиент ${item.name} ${status} заказ`;
    document.querySelector('.order').append(li);
}) 




// Задание 8
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

const div = document.createElement('div');
div.classList.add('custom-div');

linksArr.forEach(item => {
    div.innerHTML += `<a href="${item}" target="_blank">${item}</a>`;
})

document.body.append(div);




// Задание 9*
// Есть массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ]
// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

const users = [
    {name: 'Mark', age: 12},
    {name: 'Olga', age: 30},
    {name:'Tom', age: 25},
    {name:'Den', age: 43}
    ];

const table = document.querySelector('table');

users.forEach(item => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.style.color = 'red';
    const tdAge = document.createElement('td');
    tdAge.style.color = 'blue';
    tdName.textContent = item.name;
    tdAge.textContent = item.age;
    tr.append(tdName);
    tr.append(tdAge);
    table.append(tr);
   })




// Задание 11
// Есть верстка: https://teenscool1.notion.site...
// С помощью JavaScript:
// 1) Найти в коде список ul и добавить ему класс “list”.
// 2) На li через один (начиная с самого первого) установить класс “item”
// 3) На все ссылки в примере установить класс “custom-link”

const listUl = document.querySelector('ul');
listUl.className = 'list';

const listLi = document.querySelectorAll('ul li:nth-child(odd)');
listLi.forEach(item => item.className = 'item');

const allA = document.querySelectorAll('a');
allA.forEach(item => item.className = 'custom-link');