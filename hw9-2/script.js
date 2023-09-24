const openedPopup = document.querySelector('#call-back');
const popup = document.querySelector('#popup');
const closedPopupOut = document.querySelector('.popup__content');
const closedPopup = document.querySelector('.popup__close');

document.addEventListener('click', (event) => {
    const element = event.target;
    if (element === openedPopup){
        popup.classList.add('opened');
    } else if(element === closedPopup || !element.closest('.popup__content')){
        popup.classList.remove('opened');
    }
})