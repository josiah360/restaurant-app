const menu = document.createElement('div');
menu.className = 'menu';

const cardDiv = document.createElement('div');
cardDiv.className = 'menu-card';

const imgWrapper = document.createElement('figure');

const img = document.createElement('img');

const textWrapper = document.createElement('div');
textWrapper.className = 'text-wrapper';

const cardHeader = document.createElement('h3');
cardHeader.textContent = 'Eba and Egusi Meal Soup';

const cardDesc = document.createElement('p');
cardDesc.className = 'meal-desc';
cardDesc.textContent = 'A delicious African meal. You will love it';

const cardPrice = document.createElement('p');
cardPrice.className = 'price';
cardPrice.textContent = 'N5,400';

const cardButton = document.createElement('button');
cardButton.textContent = 'Order Now';


menu.appendChild(cardDiv);
    cardDiv.appendChild(imgWrapper);
        imgWrapper.appendChild(img);
    cardDiv.appendChild(textWrapper);
        textWrapper.appendChild(cardHeader);
        textWrapper.appendChild(cardDesc);
        textWrapper.appendChild(cardPrice);
        textWrapper.appendChild(cardButton);

export {
    menu
}