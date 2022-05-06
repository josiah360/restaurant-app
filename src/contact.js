const contact = document.createElement('div');
contact.className = 'contact';

const contactWrapper = document.createElement('div');
contactWrapper.className = 'contact-wrapper';

const h2 = document.createElement('h2');
h2.textContent = 'Jumia Foods Limited';

const address = document.createElement('address');

const addressP = document.createElement('p');
addressP.textContent = '58, Kadara Street, Ebute Metta, Lagos, Nigeria';

const mobileP = document.createElement('p');
mobileP.className = 'mobile';
mobileP.textContent = 'Mobile: +234-08014567893';

const emailP = document.createElement('p');
emailP.className = 'email';
emailP.textContent = 'Email: jumiafoods@jumia.com';


contact.appendChild(contactWrapper);
    contactWrapper.appendChild(h2);
    contactWrapper.appendChild(address);
    address.appendChild(addressP);
    address.appendChild(mobileP)
    address.appendChild(emailP)

export {
    contact
}