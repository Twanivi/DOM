const img = document.querySelectorAll('img');
let images = [];


if(localStorage.checkedImg){
    images = JSON.parse(localStorage.checkedImg);
    console.log(images);

}


document.addEventListener('click', (event) => {
    event.preventDefault();
    img.forEach(item => {
    const src = item.getAttribute('src');
    localStorage.chekedImg = JSON.stringify({item: 'src'});

})
    if(event.target = img){
        document.body.style.backgroundImage = 'url(event.target)';
    }
})


