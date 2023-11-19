const quote = document.querySelector('.quote');
const authors = document.querySelector('.author');

export async function getQuotes() {
    try{
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let random = data[Math.floor(Math.random() * data.length)];
    quote.innerText = `“${random.text}.”`;
    authors.innerText = random.author;
    }catch(e){
        console.error(e);
    }
  }
  
  getQuotes();