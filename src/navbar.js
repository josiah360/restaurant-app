const navbar = document.createElement('nav');
const ul = document.createElement('ul');

const logoLi = document.createElement('li');
logoLi.className = 'logo';

const logoSpan1 = document.createElement('span');
logoSpan1.className = 'bold-text';
logoSpan1.textContent = 'Beautiful';

const logoSpan2 = document.createElement('span');
logoSpan2.textContent = 'Meal';

const homeLi = document.createElement('li');
homeLi.classList.add('active');
homeLi.textContent = 'Home';

const menuLi = document.createElement('li');
menuLi.textContent = 'Menu';

const contactLi = document.createElement('li');
contactLi.textContent = 'Contact';


navbar.appendChild(ul);
    ul.appendChild(logoLi);
        logoLi.appendChild(logoSpan1);
        logoLi.appendChild(logoSpan2);
    ul.appendChild(homeLi);
    ul.appendChild(menuLi);
    ul.appendChild(contactLi);


export {
    navbar
}