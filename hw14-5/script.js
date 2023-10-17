const widget = document.querySelector('#widget');
const current = document.querySelector('#current');
const forecast = document.querySelector('#forecast');



function renderMain(town, time, img, event, temp, speed){
  setInterval(() => {
    const date = new Date().toLocaleTimeString();
    const time = document.querySelector('.time');
    time.textContent = date;
  }, 1000);

  current.insertAdjacentHTML('beforeend', `
  <p class="city">${town}</p>
  <p class="time">${time}</p>
  <div class="center-info">
    <div class="img-falldown">
     <img src="https://openweathermap.org/img/wn/${img}@2x.png" alt="falldown">
    </div>
    <p class="falldown-text">${event}</p>
    <p class="degree">${temp.toFixed()} ℃</p>
    <div class="wind">
      <p class="speed">Speed</p>
      <p class="speed-number">${speed.toFixed(1)} m/s</p>
    </div>
  </div>
  `)

}

function renderRow(time, date, img, temp){
  
  const dateToday = date.slice(0, 10);
  const times = time.slice(11);

  forecast.insertAdjacentHTML('beforeend', `
  <div class="forecast-wrapper">
  <div class="full-data">
    <p class="date">${dateToday}</p>
    <p class="time">${times}</p>
  </div>
  <div class="img-falldown">
    <img src="https://openweathermap.org/img/wn/${img}@2x.png" alt="falldown">
  </div>
  <p class="forecast-degree">${temp.toFixed()}℃</p>
  </div>
  `)
}

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Hadera&appid=fd6e03c432c2c8e83f329c5e40ae9b66&units=metric')
  .then((response) => response.json())
  .then((obj) => {
    
    renderMain(obj.city.name, obj.list[0].dt_txt, obj.list[0].weather[0].icon, obj.list[0].weather[0].description, obj.list[0].main.temp, obj.list[0].wind.speed);

    const array = obj.list;

    for(let i = 0; i < 40; i += 8){
        console.log(array[i]);
        renderRow(array[i].dt_txt, array[i].dt_txt, array[i].weather[0].icon, array[i].main.temp);
    }
});
