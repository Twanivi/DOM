// Задание 1
// 1. Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
// С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые другие).
// Добавить эти объекты в массив shops.
// В итоге должен получиться массив объектов типа:
// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
// 2. С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
// ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']

// // 1
const shops = new Array();

function Shop(name, address){
    this.name = name;
    this.address = address;
}

const shop1 = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
const shop2 = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');

shops[0] = shop1;
shops[1] = shop2;

// //2
const newShops = shops.map(item => item.address);




// Задание 2
// Напишите асинхронную функцию, которая получает список пользователей с сервера jsonplaceholder. Выведите список пользователей на страницу.
// В задании используйте синтаксис async-await и предусмотрите обработку ошибок.

const url = 'https://jsonplaceholder.typicode.com/users';
const ul = document.querySelector('ul');
    
const usersList = async () => {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Статус-код не 200')
        }
        const info = await response.json();
        info.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element.name;
            ul.append(li);
        })
    } catch (error){
        console.error(error.message);
    }
}

usersList();
