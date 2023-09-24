const burger = document.querySelector('.burger');
const sidePanelBtn = document.querySelector('button');
const mainMove = document.querySelector('main .container');
const h1 = document.querySelector('.h1-normal');
const sidePanel = document.querySelector('.side-panel');

document.addEventListener('click', (event) => {
    if(event.target === burger){
        mainMove.classList.add('move-container');
        burger.classList.add('closed-burger');
        h1.classList.add('move-up');
        sidePanel.classList.add('side-panel-open');
    }

    if(event.target === sidePanelBtn){
        mainMove.classList.remove('move-container');
        burger.classList.remove('closed-burger');
        h1.classList.remove('move-up');
        sidePanel.classList.remove('side-panel-open');
    }
})