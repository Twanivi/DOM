function logNumber() {
    console.log(5);
}

console.log(1); 

setTimeout(() => {
    console.log(7);
}, 3000);

console.log(2);
// alert(3);
console.log(4);

setTimeout(() => {
    console.log(8);
}, 2000)

logNumber();

console.log(6);

// SetTimeout, SetInterval

function sayHello (name){
    console.log('Hello, ' + name);
}

// const sayHelloInterval = setInterval(sayHello, 2000, 'Anna');

// function sayHello (name){
//     console.log('Hello!');
// }

// const sayHelloInterval = setInterval(sayHello, 2000);

const sayHelloInterval = setInterval(() => {
    console.log('hello');
}, 2000);

setTimeout(() => {
    clearInterval(sayHelloInterval);
}, 7000); 


// рекурсивный setTimeout

const timer = () => {
    // забираю дату (new Date().toLocalTimeString())
    //now.getHours
    // .textContent
    console.log('new interval');
    setTimeout(timer, 1000);
}

timer();

