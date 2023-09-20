const openedPopup = document.querySelector('#call-back');
const popup = document.querySelector('#popup');
const closedPopup = document.querySelector('.popup__close');

openedPopup.addEventListener('click', () => {
    popup.classList.add('opened');
})

closedPopup.addEventListener('click', () => {
    popup.classList.remove('opened');
})

window.addEventListener('click', (event) => {
    event.target.classList.remove('opened');
})