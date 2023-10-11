const row = document.querySelector('.row');

const renderCard = (flags, name, region, population, languages, currencies) => {
      row.insertAdjacentHTML('beforeend', `
      <div class="col">
      <div class="card h-100">
        <img src="${flags}" class="card-img-top" alt="${name}">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${region}</p>
          <p class="card-text2">👨‍👩‍👦 ${population} млн</p>
          <p class="card-text3">🗣 ${languages}</p>
          <p class="card-text4">💰 ${currencies}</p>
        </div>
      </div>
    </div>
      `)
}

fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((obj) => {

    for(let i = 0; i <= obj.length; i += 10){
      newObj.push(obj[i]);
    }
      
    newObj.forEach(element => {
      
        const populationMln = (+element.population / 1000000).toFixed(2);
        
        
        renderCard(element.flags.svg, element.name.official, element.region, populationMln, element.languages, element.currencies)
    });

    
});