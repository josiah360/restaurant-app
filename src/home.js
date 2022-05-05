import img from './img/food-13528.png'

const home = document.createElement('div');
home.className = 'home';

const textDiv = document.createElement('div');
textDiv.className = 'head-text';

const header = document.createElement('h1');
header.textContent = 'Get it while it\'s hot!'

const p = document.createElement('p');
p.textContent = 'We create custom, personal meals in only five minutes.';

const orderButton = document.createElement('button');
orderButton.textContent = 'Order Online';

const imgDiv = document.createElement('div');
imgDiv.className = 'img-div';

const foodImg = document.createElement('img');
foodImg.src = img;

home.appendChild(textDiv);
    textDiv.appendChild(header);
    textDiv.appendChild(p);
    textDiv.appendChild(orderButton);
home.appendChild(imgDiv);
    imgDiv.appendChild(foodImg);

export {
    home
}
