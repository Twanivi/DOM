const wrapper = document.querySelector('.choice-img');
const images = Array.from(document.querySelectorAll('.choice-img img'));

if(localStorage.activeSrc){
    document.body.style.backgroundImage = `url(${localStorage.activeSrc})`; 
} else{
    document.body.style.backgroundImage = `url(${images[0].src})`;
}

wrapper.addEventListener('click', (e) => {
    if(e.target.matches('img')){
        const activeImage = e.target;  // img, на которую кликнули
        images.forEach(img => img.classList.remove('active'));
        activeImage.classList.add('active');
        const activeSrc = activeImage.getAttribute('src');   // src картинки, на которую кликнули
        localStorage.activeSrc = activeSrc
        document.body.style.backgroundImage = `url(${activeSrc})`;
    }
})

