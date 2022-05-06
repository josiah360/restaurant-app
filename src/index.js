import './style.css';
import { navbar } from './navbar';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';


const body = document.querySelector('body');
const contentDiv = document.createElement('div');
contentDiv.className = 'content-div';

body.appendChild(navbar);
body.appendChild(contentDiv);


window.addEventListener('load', () => {
    contentDiv.appendChild(home)
});


navbar.addEventListener('click', (e) => {
    const button = e.target;
    const navButtons = document.querySelectorAll('nav li:not(:first-child)');
    const text = button.textContent

    navButtons.forEach(navbutton => {
        navbutton.classList.remove('active');
    })

    if(button.textContent === text) {
        button.classList.add('active');
    }
})

const homeButton = document.querySelector('nav li:nth-child(2)');
homeButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(home);
})


const menuButton = document.querySelector('nav li:nth-child(3)');
menuButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(menu)
});

const contactButton = document.querySelector('nav li:nth-child(4)');
contactButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(contact)
});


