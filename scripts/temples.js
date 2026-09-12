// Get Dates

const d = new Date();
const year = d.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;


// Hamburger Menu
const hamburger = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-x')
    menu.classList.toggle('show');
});