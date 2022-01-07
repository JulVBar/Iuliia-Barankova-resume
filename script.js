'use strict';

const toggleLangBtn = document.querySelector('.switch__btn');
const rusVersion = document.querySelectorAll('[data-lang="rus"]');
const engVersion = document.querySelectorAll('[data-lang="eng"]');

document.querySelector('.page').classList.add('fade');

rusVersion.forEach(item => {
    item.classList.add('fade');
});

engVersion.forEach(item => {
    item.classList.add('non-active');
});


toggleLangBtn.addEventListener('click', () => {
    rusVersion.forEach(item => {
        item.classList.toggle('non-active');
        item.classList.toggle('fade');
    });
    
    engVersion.forEach(item => {
        item.classList.toggle('non-active');
        item.classList.toggle('fade');
    });

    if (toggleLangBtn.textContent == "English version") {
        toggleLangBtn.textContent = "Русская версия";
    } else {
        toggleLangBtn.textContent = "English version";
    }
});
