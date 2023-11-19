const time = document.querySelector('.time');
const dates = document.querySelector('.date');

export const showDate = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      month: "long", 
      day: "numeric" 
    };
    const currentDate = date.toLocaleDateString("en-US", options);
    dates.textContent = currentDate;
  }

export const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
  }