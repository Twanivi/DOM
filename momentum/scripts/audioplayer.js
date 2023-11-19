const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.play');
const button = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const ul = document.querySelector('.play-list');

let playNum = 0;
let isPlay = false;

const audio = new Audio();

export function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  if(!isPlay){
    audio.play();
  } else {
    audio.pause();
  }
  
}

playBtn.addEventListener('click', () => {
    isPlay = true;
    playAudio();
});

pauseBtn.addEventListener('click', () => {
    isPlay = false;
    playAudio();
});



export function toggleBtn() {
  button.classList.toggle('pause');
}

button.addEventListener('click', toggleBtn);

playNextBtn.addEventListener('click', () => {
    if(!isPlay){
        button.classList.remove('pause');
      } else {
        button.classList.add('pause');
      }
})

playPrevBtn.addEventListener('click', () => {
    if(!isPlay){
        button.classList.remove('pause');
      } else {
        button.classList.add('pause');
      }
})

const playNext = () => {
    for (let i = 0; i < 8; i++) {
        playNum = i + 1;
        if(playNum = 8){
            (i + 1) === 1;
        }
    }
    playAudio();
}

const playPrev = () => {
    for (let i = 0; i <= 8; i++) {
        playNum = i - 1;
        if(playNum = 1){
            (i - 1) === 8;
        }
    }
    playAudio();
}

export const renderPlayList = () => {
    playList.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = `${el.title}`;
        ul.append('li');
})
}