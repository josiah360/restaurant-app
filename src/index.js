import './style.css';
import foodImg from './img/photo.jpg'
import { navbar } from './navbar';
import { home } from './home';
import { menu } from './menu';


const body = document.querySelector('body');
const contentDiv = document.createElement('div');
contentDiv.className = 'content-div';

body.appendChild(navbar)
body.appendChild(contentDiv)

contentDiv.appendChild(menu)
const img = document.querySelector('.menu img');
img.src = foodImg;



// window.addEventListener('load', () => {
//     contentDiv.appendChild(home)
// })


// const homeButton = document.querySelector('nav li:nth-child(2)');
// homeButton.addEventListener('click', () => {
//     contentDiv.appendChild(home)
// })
