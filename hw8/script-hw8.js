// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

const inputName = document.querySelector('.name');
const ul = document.querySelector('ul');

inputName.addEventListener('click', () => {
    const li = document.createElement('li');
    ul.append(li);
   
})

inputName.addEventListener('keydown', (event) => {
    event.preventDefault();
    li.textContent = inputName.value;
})
// // // ????????????????



// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

const inputName = document.querySelector('.name');

inputName.addEventListener('keyup', (event) => {
    event.preventDefault();
    console.log(inputName.value);
})




// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).


const sendOrder = document.querySelector('.send-order');
const inputOrder = document.querySelector('.order')
const ul = document.querySelector('ul');

sendOrder.addEventListener('submit', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    ul.append(li);
    li.textContent = inputOrder.value;
    inputOrder.value = '';
})




// Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)

const form = document.querySelector('.calc');
const select = form.querySelector('select');
const options = select.querySelectorAll('option');
const firstNumber = form.querySelector('.first-number');
const secondNumber = form.querySelector('second-number');
const result = document.querySelector('div');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(firstNumber === undefined){
        result.innerHTML = 'Введите первое число';
    } else if(secondNumber === undefined){
        result.innerHTML = 'Введите второе число';
    } else if(select.value === '+'){
        result.innerHTML = `${firstNumber} + ${secondNumber}`;
    } else if(select.value === '-'){
        result.innerHTML = `${firstNumber} - ${secondNumber}`;
    } else if(select.value === '*'){
        result.innerHTML = `${firstNumber} * ${secondNumber}`;
    } else if(select.value === '/'){
        result.innerHTML = `${firstNumber} / ${secondNumber}`;
    }
})





// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

const button = document.querySelector('.change');

button.addEventListener('mouseenter', () => {
    button.style.background = `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`
})

button.addEventListener('mouseleave', () => {
    button.style.transform = `rotate(${getRandomInt(-180,180)}deg)`
})
