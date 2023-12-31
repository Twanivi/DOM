const row = document.querySelector('.row');

const renderCard = (flag, nameOf, regions, population, languages, currencies) => { 
  
  const populationMln = (+population / 1000000).toFixed(3);
  const langs = languages ? Object.values(languages).join(', ') : '-';
  const currArray = currencies ? Object.values(currencies) : [];
  const currString = currArray.length ? currArray.map(item => item.symbol + ' ' + item.name).join(', ') : '-';

  row.insertAdjacentHTML('beforeend', `
      <div class="col">
      <div class="card h-100">
        <img src="${flag}" class="card-img-top" alt="${nameOf}">
        <div class="card-body">
          <h5 class="card-title">${nameOf}</h5>
          <p class="card-text">${regions}</p>
          <p class="card-text2">👨‍👩‍👦 ${populationMln} млн</p>
          <p class="card-text3">🗣 ${langs}</p>
          <p class="card-text4">💰 ${currString}</p>
        </div>
      </div>
    </div>
      `)
}

fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((array) => {
  
  for(let i = 0; i < array.length; i += 10){
    
      renderCard(array[i].flags.svg, array[i].name.official, array[i].region, array[i].population, array[i].languages, array[i].currencies);
  } 

});