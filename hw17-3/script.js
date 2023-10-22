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
        <img src="${element.snippet.thumbnails.default.url}" alt="${element.snippet.title}">
        `)
    });
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBtpCmb4WHmKy3I10fzVprfjfW172m8ZnQ&q=${input.value}&type=video`;
    input.value = '';
   
    const response = await fetch(url)
    const findVideo = await response.json();

    renderPlayer(findVideo.items[0].id.videoId);
    renderPreview(findVideo.items);
})








