//-----Count the Number of Times this JS is opened
//since the review.html page is the only one that opens this script
//this will tell us how many times the form is submitted
let count = Number(localStorage.getItem('formSubmissions')) || 0;
count++;
localStorage.setItem("formSubmissions", count);

// Add the count to the document
const reviewElement = document.getElementById('review-count');
reviewElement.textContent = count;