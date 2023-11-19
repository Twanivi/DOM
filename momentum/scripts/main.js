import {showTime, showDate} from './time-date.js';
showTime(showGreeting());
showDate();

import { getTimeOfDay, showGreeting, setLocalStorage, getLocalStorage } from './sayhi.js';

const name = document.querySelector('.name');
name.addEventListener('change', () => {
    showGreeting();
    getTimeOfDay();
    setLocalStorage();
    getLocalStorage();

 })

import { getWeather,  setLocalStorageWeather,  getLocalStorageWeather} from './wheater.js';
const city = document.querySelector('.city');
city.addEventListener('change', () => {
    getWeather(url);
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=5125c926221ca6cd9fc6ad63039f6932&units=metric`;
    setLocalStorageWeather();
    getLocalStorageWeather();
 })


import { getQuotes } from './citation.js';
const btnChangeQuote = document.querySelector('.change-quote');
btnChangeQuote.addEventListener('click', getQuotes)

import { setBg, getSlideNext, getSlidePrev } from './slideimg.js';
setBg(getTimeOfDay());
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);

import playList from './playList.js';
console.log(playList);

import { playAudio, toggleBtn, playNext, playPrev, renderPlayList } from './audioplayer.js';

playAudio();
toggleBtn();
playNext();
playPrev();
renderPlayList();