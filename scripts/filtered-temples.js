
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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    
    {
        templeName: "Los Angeles",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 11",
        area: 190614,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-49533-thumb.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25-30",
        area: 72000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-33711-main.jpg"
    },
    // Add more temple objects here...
  ];

let templesBox = document.getElementById('main-box')
let i = 0
// for (let i = 0; i < temples.length; i++) {
//     const img = document.createElement('img');
//     img.src = temples[i].imageUrl;
//     consoleLog.appendChild(img);
// }
temples.forEach(temple => {
    const divBox = document.createElement('figure');
    divBox.classList.add('thumbnail')
    
    const img = document.createElement('img');
    img.src = temples[i].imageUrl;
    img.classList.add('templeImg');
    img.alt = `Photo of the ${temples[i].templeName} temple`;
    img.loading = 'lazy'
    divBox.appendChild(img);
    templesBox.appendChild(divBox);
    console.log(divBox);

    // create title
    const templeName = document.createElement('h2')
    templeName.textContent
    i = i + 1;
})
