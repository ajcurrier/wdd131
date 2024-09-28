
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let lastModified = new Date(document.lastModified);

document.getElementById('currentYear').textContent = currentYear;

// code using template literals
// document.getElementById('lastModified').textContent = `Last Modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;

// without using template literals
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified.toLocaleDateString() + ' ' + lastModified.toLocaleTimeString();

// select the hamburger and menu elements
const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const fadeElement = document.getElementById('fading-line')

// Toggle the 'active' class on click
hamburger.addEventListener('click', function() {
    console.log('hamburger menu clicked')
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    fadeElement.classList.toggle('active');
})

