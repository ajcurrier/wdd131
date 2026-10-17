// ------Add Event Listener
const d = new Date();
const year = d.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;

//-----Count the Number of Times this JS is opened
// Track how many times the review page has been loaded
let count = Number(localStorage.getItem('formSubmissions')) || 0;
count++;
localStorage.setItem("formSubmissions", count);

// Add the count to the document
const reviewElement = document.getElementById('review-count');
reviewElement.textContent = count;