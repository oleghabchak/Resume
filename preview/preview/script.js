'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height);

btn.addEventListener('mouseover', () => {
    box.style.height = box.scrollHeight + "px";
});

console.log(box.getBoundingClientRect().top);

console.log(document.documentElement.scrollTop);