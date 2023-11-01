const url = 'https://open.er-api.com/v6/latest/ILS'

class Converter {
    constructor (url){
        this.url = url;
        this.html = null;
        // this.result = result;
    }

    async render(){
       const response = await fetch(this.url);
       const data = await response.json();
        console.log(data);
        this.html =  document.body.insertAdjacentHTML('beforeend', `
        <label>ILS:</label>
    <input type="text">
    <label>to:</label>
    <select name="currency">
        <option value="${data.rates.BYN}" selected>BYN</option>
        <option value="${data.rates.RUB}">RUB</option>
        <option value="${data.rates.EUR}">EUR</option>
        <option value="${data.rates.USD}">USD</option>
        <option value="${data.rates.CNY}">CNY</option>
    </select>
    <div>
        <p>${this.result}</p>
    </div>
        `);
        const input = document.querySelector('input');
        const optionAll = document.querySelectorAll('option');

        const optionsArray = Array.from(optionAll)
        const optionsValues = optionsArray.map(option => option.value);
        console.log(optionsArray.selected);
        input.addEventListener('keyup', () => {
            if(input.value && optionsValues.selected)
            this.result = +input.value * +optionsValues.selected;
        })
    }


}

const resultConverter = new Converter('https://open.er-api.com/v6/latest/ILS');

resultConverter.render();