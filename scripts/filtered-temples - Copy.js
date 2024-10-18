
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


// menu event listeners
let sortOlderTemples = false;
let sortNewerTemples = false;
let sortLargerTemples = false;
let sortSmallerTemples = false;
let alltemples = true;
// event listeners
function resetFilters() {
    sortOlderTemples = false;
    sortNewerTemples = false;
    sortLargerTemples = false;
    sortSmallerTemples = false;
    alltemples = false; // Turn off all filters initially
}





//                EVENT LISTENERS
// let dateparts = temples.dedicated.split(",")
// let year = parseInt(dateparts[0])
document.querySelector('#home').addEventListener('click', () => {
    let dateparts = temples.dedicated.split(",")
    let year = parseInt(dateparts[0])
    printTemple(temples.filter(temple => {year < 1900}))
   
})

document.querySelector('#old').addEventListener('click', () =>  { 
    let dateparts = temples.dedicated.split(",")
    let year = parseInt(dateparts[0])
    printTemple(temples.filter(temple => {year < 1900}))
});
    
document.querySelector('#new').addEventListener('click', () =>  { 
    resetFilters();
    sortNewerTemples = true;
    console.log(sortNewerTemples);
});
document.querySelector('#large').addEventListener('click', () =>  { 
    resetFilters();
    sortLargerTemples = true;
    console.log(sortLargerTemples);
});
document.querySelector('#small').addEventListener('click', () =>  { 
    resetFilters();
    sortSmallerTemples = true;
    console.log(sortSmallerTemples);
});
document.querySelector('#home').addEventListener('click', () =>  { 
    resetFilters();
    alltemples = true;
    console.log(alltemples);
});
const templesBox = document.querySelector('#mainbox'); // Correct

console.log(templesBox);

 let i = 0;
// for (let i = 0; i < temples.length; i++) {
//     const img = document.createElement('img');
//     img.src = temples[i].imageUrl;
//     consoleLog.appendChild(img);
// }
function printTemple (temple) {
    
    let img = document.createElement('img');
    let divBox = document.createElement('figure');
    let templeHead = document.createElement('h3');
    let templeStats = document.createElement('div');
    divBox.classList.add('templeCards');
    // create image html
    img.src = temple.imageUrl;
    img.classList.add('templeImg');
    img.alt = `Photo of the ${temple.templeName} temple`;
    img.loading = 'lazy';
    divBox.appendChild(img);
    // add the images as a child to the templesBox
    document.getElementById('mainbox').appendChild(divBox);
    console.log(divBox);

// create title
    
    templeHead.textContent = temple.templeName;
    divBox.appendChild(templeHead);
    console.log(templeHead);
    console.log(divBox);
    

    // Temple Stats
        
        templeStats.innerHTML = (`<h5>Location: </h5> <p> ${temple.location}</p>
            <h5>Dedicated: </h5> <p> ${temple.dedicated}</p>
            <h5>Size: </h5> <p> ${temple.area}</p>`);
        templeStats.classList.add('templeStats')
            console.log(templeStats);
            divBox.appendChild(templeStats);
    
}

// sort and print

temples.forEach(temples => {
    let currentTemple = temples;
    const year = parseInt(temples.dedicated.split(',')[0]); // Extract year

    if (sortOlderTemples && year < 1900) {
        printTemple(currentTemple);
    } else if (sortNewerTemples && year > 1900) {
        printTemple(currentTemple);
    } else if (sortLargerTemples && currentTemple.area > 90000) {
        printTemple(currentTemple);
    } else if (sortSmallerTemples && currentTemple.area < 10000) {
        printTemple(currentTemple);
    } else {
        printTemple(currentTemple);
    }
    console.log('Current Filters:', {
        sortOlderTemples,
        sortNewerTemples,
        sortLargerTemples,
        sortSmallerTemples,
        alltemples
    });
//     i = i + 1;
});