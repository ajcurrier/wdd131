
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let lastModified = new Date(document.lastModified);

document.getElementById('currentYear').textContent = currentYear;

// code using template literals
// document.getElementById('lastModified').textContent = `Last Modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;

// without using template literals
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified.toLocaleDateString() + ' ' + lastModified.toLocaleTimeString();
