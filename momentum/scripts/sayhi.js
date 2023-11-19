const timeOfDay = document.querySelector('.greeting');
const name = document.querySelector('.name');

export const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    
    if(hours >= 0 && hours < 6){
        timeOfDay.textContent = 'night';
    } if(hours < 12){
        timeOfDay.textContent = 'morning';
    } if(hours < 18){
        timeOfDay.textContent = 'day';
    } else {
        timeOfDay.textContent = 'evening';
    }
    return timeOfDay;
}

export const showGreeting = () => {
    const greeting = getTimeOfDay();
    const timeOfDayNow = greeting.textContent;
    const greetingText = `Good ${timeOfDayNow}`;
}


export function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  export function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage);