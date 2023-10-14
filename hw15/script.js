const row = document.querySelector('.row');

const renderCard = (arrayCards) => { 
console.log(arrayCards);
  
  const flag = arrayCards.flags.svg;
  const nameOf = arrayCards.name.official;
  const regions = arrayCards.region;
  const populationMln = (+arrayCards.population / 1000000).toFixed(3);
  const langs = arrayCards.languages ? Object.values(arrayCards.languages).join(', ') : '-';
  const currArray = arrayCards.currencies ? Object.values(arrayCards.currencies) : [];
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
    
    for(let i = 0; i <= array.length; i += 10){
      console.log(array[i]);
      
      renderCard(array[i]);
    
  }
    
});