const widget = document.querySelector('#widget');
const current = document.querySelector('#current');
const forecast = document.querySelector('#forecast');



function renderMain(town, time, img, event, temp, speed){
  current.insertAdjacentHTML('beforeend', `
  <p class="city">${town}</p>
  <p class="time">${time}</p>
  <img src="${img}" alt="falldown">
  <p class="falldown-text">${event}</p>
  <p class="degree">${temp} ℃</p>
  <div class="wind">
      <p class="speed">Speed</p>
      <p class="speed-number">${speed} m/s</p>
  </div>
  `)

}

function renderRow(time, date, img, temp){
  
  setInterval(() => {
    const date = new Date().toLocaleTimeString();
    const time = document.querySelector('.time');
    time.textContent = date;
  }, 1000);
  forecast.insertAdjacentHTML('beforeend', `
  <div class="full-data">
    <p class="date">${date}</p>
    <p class="time">${time}</p>
  </div>
  <img src="${img}" alt="falldown">
  <p class="forecast-degree">${temp}℃</p>
  `)
}

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Hadera&appid=fd6e03c432c2c8e83f329c5e40ae9b66&units=metric')
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj);
    
    renderMain(obj.city.name, obj.list[0].dt_txt, obj.list[0].weather[0].icon, obj.list[0].weather[0].description, obj.list[0].main.temp, obj.list[0].wind.speed);

      for(let i = 0; i < 40; i += 8){
        
        renderRow(obj[i].dt_txt, date, obj.list[i].weather[0].icon, obj.list[i].main.temp);
      }
});
