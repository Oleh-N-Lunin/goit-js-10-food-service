import './styles.css';
import gallery from './menu.json';
import template from './templates/test-template.hbs';
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


const Handlebars = require("handlebars");


console.log(gallery);
const menu = document.querySelector('.js-menu');
const bodyColor = document.querySelector('body');
const switchBtn = document.querySelector('.theme-switch__toggle');


//

switchBtn.addEventListener('change', function () {
    bodyColor.className = '';
    setTheme(switchBtn.checked);
});

document.addEventListener('DOMContentLoaded', function () {
    switchBtn.checked = localStorage.getItem('color') === Theme.DARK;
    setTheme(switchBtn.checked);
    template(gallery)
    console.log(template(gallery));
    menu.insertAdjacentHTML('beforeend', template(gallery));
});



function setTheme(isChecked) {
    if (isChecked) {
        bodyColor.classList.add(Theme.DARK);
        localStorage.setItem('color', Theme.DARK);
    } else {
        bodyColor.classList.add(Theme.LIGHT);
        localStorage.setItem('color', Theme.LIGHT);
    }
}

console.log(switchBtn);
console.log(localStorage);