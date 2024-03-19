'use strict';

const ruBtn = document.querySelector('#ru-lang');
const enBtn = document.querySelector('#en-lang');
const rusVersion = document.querySelectorAll('[data-lang="rus"]');
const engVersion = document.querySelectorAll('[data-lang="eng"]');

document.querySelector('.page').classList.add('fade');

rusVersion.forEach(item => {
    item.classList.add('fade');
});

engVersion.forEach(item => {
    item.style.display = "none"
});


ruBtn.addEventListener('click', () => {
    enBtn.classList.remove('active')
    ruBtn.classList.add('active')
    rusVersion.forEach(item => {
        item.style.display = "block"
        item.classList.add('fade');
    });
    engVersion.forEach(item => {
        item.style.display = "none"
        item.classList.remove('fade');
    });
});
enBtn.addEventListener('click', () => {
    ruBtn.classList.remove('active')
    enBtn.classList.add('active')
    engVersion.forEach(item => {
        item.classList.add('fade');
        item.style.display = "block"
    });
    rusVersion.forEach(item => {
        item.style.display = "none"
        item.classList.remove('fade');
    });
});
