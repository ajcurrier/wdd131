// Rubric Requirements:
// More than one, working function was used.
// DOM interaction including selecting an element, modifying that element, and event listening with functionality were used.
// Conditional branching was used and working.
// At least one object was used.
// At least one array and one array method was used.
// Template literals were used exclusively for string manipulation and output.
// localStorage was used and functional.
//

// Last Modified
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