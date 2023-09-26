const burger = document.querySelector('.burger');
const close = document.querySelector('.closed');
const downPanel = document.querySelector('.down-panel');

document.addEventListener('click', (event) => {
    const element = event.target;
    if (element === burger){
        downPanel.classList.add('open');
        close.classList.add('show');
        burger.classList.add('hidden');
    } else if(element === close ){
        downPanel.classList.remove('open');
        close.classList.remove('show');
        burger.classList.remove('hidden');
    }
})