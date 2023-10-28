// Задание 1
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

function Cosmetics(type){
        this.type = type;
        this.render= function(){
        document.body.innerHTML += this.type;
    }    
}

const shampoo = new Cosmetics('Pantene');
const lipstick = new Cosmetics('Dior');

shampoo.render();
lipstick.render();






// Задание 2
// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств

class Calculator {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    sum(){
        return this.num1 + this.num2;
    }

    mul(){
        return this.num1 * this.num2;
    }
}

const numbers = new Calculator(Number(prompt('Введите первое число')), Number(prompt('Введите второе число')));

numbers.sum();
numbers.mul();