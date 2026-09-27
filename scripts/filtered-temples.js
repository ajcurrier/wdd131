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

// Filtered Temples

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
    
    // Add more temple objects here...
  {
        templeName: "Los Angeles California Temple",
        location: "Los Angeles, California, US",
        dedicated: "1956, March 11",
        area: 190614,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-california-temple-1079458-wallpaper.jpg"      
    },
  {
      templeName: "Provo City Center Temple",
      location: "Provo, Utah, US",
      dedicated: "2016, March, 20",
      area: 7905,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"

    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, US",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    }
];

temples.forEach(temple => {
    
    // card
    const card = document.createElement("figure");
    //optional class for temple card - I think I will select by #temples section{} in the css instead
    // card.classList.add("temple-card");
    
    
    // Title Element
    const title = document.createElement("h3");
    title.textContent = temple.templeName;
    
    // Location
    const locationHTML = document.createElement("p");
    locationHTML.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    // Dedicated
    const dedicated = document.createElement("p")
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    // Area
    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area}`;
    // Create the alt
    const alt = `An image of the ${temple.templeName} temple in ${temple.location}`;
    // Add the image
    const thumbIMG = document.createElement("img");
    thumbIMG.src = temple.imageUrl;
    // add the alt to the image
    thumbIMG.alt = alt;
    // Add the width and height
    thumbIMG.width = 400;
    thumbIMG.height = 250;
    // Add Lazy Loading to the image
    thumbIMG.setAttribute("loading", "lazy");
   
    // Turn off all cards
    // card.style.setProperty("display", "none");
    
    // Separate temples object by Values
    // get the dedication year string and split parts at the comma
    const parts = temple.dedicated.split(",");
    // convert the year string into a number
    const year = parseInt(parts[0]);
    // get the area value
    const size = temple.area;
    
    
    // ADD CLASSES
    // add "Old" class if temple is built before 1900
    if (year < 1900) {
        card.classList.add("old");
    };
    // Add New Class if temple was built after 2000
    if (year > 2000) {
        card.classList.add("new");
    };
    // add large class if temple is larger than 90000
    if (size > 90000) {
        card.classList.add("large");
    };
    // add small class if smaller than 10000 sq feet
    if (size < 10000) {
        card.classList.add("small");
    };


    
    
    // Add individual elements to "Card"
    card.appendChild(title);
    card.appendChild(locationHTML);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(thumbIMG);


    // Find #temples in HTML and add "Card" 
    const container = document.getElementById('temples');
    container.appendChild(card);

    
});
// DEFINE LIST ITEMS FOR USER COMMUNICATION
const listItems = document.querySelectorAll('li a');
// Define Page heading
const pageHeading = document.getElementById('page-heading')

// HOME BUTTON
// get the  home button
const homeBtn = document.getElementById('home-btn');
// get Nodelist of all figures
const allCardsNode = document.querySelectorAll('figure');

// add the event listener
homeBtn.addEventListener('click', () => {
    // Change Page Title
    pageHeading.textContent = 'Home';
    // Remove 'is-active' from all nav items
    listItems.forEach(el => el.classList.remove('is-active'));
    // Add 'is-active' to the clicked item
    homeBtn.querySelector('a').classList.add('is-active');
    // display all cards
    allCardsNode.forEach(card => {
        card.style.display = "";
    });
});

// OLD BUTTON
// get navigation old button
const oldBtn = document.getElementById('old-btn');
const oldCards = document.querySelectorAll('.old');
// add the old event listener
oldBtn.addEventListener('click', () => {
    // Change Page Title
    pageHeading.textContent = 'Old Temples';
    // Remove 'is-active' from all nav items
    listItems.forEach(el => el.classList.remove('is-active'));
    // Add 'is-active' to the clicked item
    oldBtn.querySelector('a').classList.add('is-active');
    // parse through nodelist of all cards and hide them
    allCardsNode.forEach(card => {
    card.style.display = "none";
    });
    // parse through the NodeList of oldCards
    oldCards.forEach(card => {
        // display the old cards
    card.style.display = "";
    });
});

// NEW BUTTON
// get navigation new button
const newBtn = document.getElementById('new-btn');
const newCards = document.querySelectorAll('.new');
// add the old event listener
newBtn.addEventListener('click', () => {
    // Change Page Title
    pageHeading.textContent = 'New Temples';
    // Remove 'is-active' from all nav items
    listItems.forEach(el => el.classList.remove('is-active'));
    // Add 'is-active' to the clicked item
    newBtn.querySelector('a').classList.add('is-active');
    // parse through nodelist of all cards and hide them
    allCardsNode.forEach(card => {
    card.style.display = "none";
    });
    // parse through the NodeList of newCards
    newCards.forEach(card => {
        // display the new cards
    card.style.display = "";
    });
});
// LARGE BUTTON
// get navigation large button
const largeBtn = document.getElementById('large-btn');
const largeCards = document.querySelectorAll('.large');
// add the old event listener
largeBtn.addEventListener('click', () => {
    // Change Page Title
    pageHeading.textContent = 'Large Temples';
    // Remove 'is-active' from all nav items
    listItems.forEach(el => el.classList.remove('is-active'));
    // Add 'is-active' to the clicked item
    largeBtn.querySelector('a').classList.add('is-active');
    // parse through nodelist of all cards and hide them
    allCardsNode.forEach(card => {
    card.style.display = "none";
    });
    // parse through the NodeList of largeCards
    largeCards.forEach(card => {
        // display the large cards
    card.style.display = "";
    });
});
// SMALL BUTTON
// get navigation small button
const smallBtn = document.getElementById('small-btn');
const smallCards = document.querySelectorAll('.small');
// add the old event listener
smallBtn.addEventListener('click', () => {
    // Change Page Title
    pageHeading.textContent = 'Small Temples';
    // Remove 'is-active' from all nav items
    listItems.forEach(el => el.classList.remove('is-active'));
    // Add 'is-active' to the clicked item
    smallBtn.querySelector('a').classList.add('is-active');
    // parse through nodelist of all cards and hide them
    allCardsNode.forEach(card => {
    card.style.display = "none";
    });
    // parse through the NodeList of smallCards
    smallCards.forEach(card => {
        // display the small cards
    card.style.display = "";
    });
});

