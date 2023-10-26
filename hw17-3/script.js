const form = document.querySelector('form');
const input = document.querySelector('input');
const player = document.querySelector('.player');
const preview = document.querySelector('.preview');


const renderPlayer = (video) => {
    player.textContent = '';
    player.insertAdjacentHTML('beforeend', `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${video}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    `)
}

const renderPreview = (allPreview) => {
    preview.textContent = '';

    allPreview.forEach(element => {
        preview.insertAdjacentHTML('beforeend', `
        <img src="${element.snippet.thumbnails.default.url}" alt="${element.snippet.title}" data-preview-id="${element.id.videoId}">
        `)
    });
}

form.addEventListener('submit', async (event) => {
    try{

    event.preventDefault();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAOYg3N8nZL5qRCphIzenoFMHT990aOUu4&q=${input.value}&type=video`;
    input.value = '';

    const response = await fetch(url)
    if(!response.ok){
        throw new Error('Ошибка статус-кода')
    }
    const findVideo = await response.json();

    renderPlayer(findVideo.items[0].id.videoId);
    renderPreview(findVideo.items)

    } catch (error){
        console.error(error)
    }
})


preview.addEventListener('click', async (event) => {
    try{
        const choosePreviews = event.target;
        const choicedPreview = choosePreviews.closest(event.dataset);
        player.textContent = '';

    } catch (error){
        console.error(error)
    }
})







