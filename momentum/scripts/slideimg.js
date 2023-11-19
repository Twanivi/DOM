let randomNum;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

randomNum = getRandomInt(1, 21);

export const getSlideNext = () => {
    for (let i = 0; i < 20; i++) {
        randomNum = i + 1;
        if(randomNum = 20){
            (i + 1) === 1;
        }
    }
    setBg()
}

export const getSlidePrev = () => {
    for (let i = 0; i <= 20; i++) {
        randomNum = i - 1;
        if(randomNum = 1){
            (i - 1) === 20;
        }
    }
    setBg()
}

export const setBg = (timeOfDayNow) => {
    const timeOfDay = timeOfDayNow.textContent;
    let bgNum = randomNum.padStart(2, "0")
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`

    img.addEventListener('load', () => {
        document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
      })
}