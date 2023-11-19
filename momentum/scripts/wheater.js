const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

 export async function getWeather() {
    try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=5125c926221ca6cd9fc6ad63039f6932&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  }catch (e){
    console.error(e)
}
}

export function setLocalStorageWeather() {
    localStorage.setItem('city', city.value);
    localStorage.setItem('weather-icon', weatherIcon.value);
    localStorage.setItem('temperature', temperature.value);
    localStorage.setItem('weather-description', weatherDescription.value);
    localStorage.setItem('wind', wind.value);
    localStorage.setItem('humidity', humidity.value);
  }
  window.addEventListener('beforeunload', setLocalStorageWeather);

  export function getLocalStorageWeather() {
    if(localStorage.getItem('city') ) {
      city.value = localStorage.getItem('city');
    } if(localStorage.getItem('wheather-icon')){
      weatherIcon.value = localStorage.getItem('weather-icon');
    } if(localStorage.getItem('temperature')){
      temperature.value = localStorage.getItem('temperature');
    } if(localStorage.getItem('weather-description')){
      weatherDescription.value = localStorage.getItem('weather-description');
    } if(localStorage.getItem('wind')){
      wind.value = localStorage.getItem('wind');
    } if(localStorage.getItem('humidity')){
      humidity.value = localStorage.getItem('humidity');
    }
  }
  window.addEventListener('load', getLocalStorageWeather);