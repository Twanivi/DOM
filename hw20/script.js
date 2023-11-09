const url = 'https://open.er-api.com/v6/latest/ILS';
const input = document.querySelector('input');
const select = document.querySelector('select');
const result = document.querySelector('p');


class CurrencyConverter {
    constructor (baseCurrency, rates){
        this.url = url;
        this.baseCurrency = baseCurrency;
        this.rates = rates;

    }

    async converter(quantity, targetCurrency){
        try{
            const response = await fetch(this.url);
            if(!response.ok){
                throw new Error ('Произошла ошибка')
            }
        const data = await response.json();

        select.addEventListener('change', () => {
            
            const allCurrency = Object.values(data.rates);
            this.rates = allCurrency; 
            this.baseCurrency = allCurrency[0];
            
            const arrayCur = Object.keys(data.rates)
            targetCurrency = arrayCur.indexOf(select.value)
            quantity = input.value * this.baseCurrency;
            
            return result.innerHTML = (quantity * this.rates[targetCurrency]).toFixed(2);
        })

        input.addEventListener('keyup', (event) => {
            event.preventDefault();
            const allCurrency = Object.values(data.rates);
            this.rates = allCurrency; 
            this.baseCurrency = allCurrency[0];
            
            const arrayCur = Object.keys(data.rates)
            targetCurrency = arrayCur.indexOf(select.value)
            quantity = event.target.value * this.baseCurrency;
            
            return result.innerHTML = (quantity * this.rates[targetCurrency]).toFixed(2);
            
        })

        
        
        } catch (error){
            console.error(error);
        }
        
    }
}

const resultConverter = new CurrencyConverter('https://open.er-api.com/v6/latest/ILS');

resultConverter.converter();