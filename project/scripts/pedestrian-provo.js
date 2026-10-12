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

// ------------------------Join Us Form--------------------------
// Get form by class and add event listener for submission
let form = document.querySelector(".wf1");
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent default interrupts normal get page load



    // ---------------------Form Event Listener: Save Form input as a JS Object --------------------------
    const userData = {
        nameInput: document.getElementById('fname').value,
        emailInput: document.getElementById('email').value,
        petInput: document.getElementById('pet').value,
    }
    // The code below saves in local storage as individual values, instead of saving as an object
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const pet = document.getElementById('pet').value;

    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    // localStorage.setItem("pet", pet);


    // --------------------Form Event Listener: add to localStorage-------------------------
    localStorage.setItem('user', JSON.stringify(userData)); // JSON.stringify converts the object to a string
                                //JSON (JavaScript Object Notation) is the text format used to store and exchange data.

    // --------------------Form Event Listener: Success Message-------------------------
    document.getElementById('successful-submission').innerHTML =
        `<br>
        <strong>Thanks for joining, ${userData.nameInput}!</strong>
        <p>Your information has been sent.</p>`;
    
})




// ---------------------- Form: Retrieve user object from localStorage-------------------------
const savedUser = JSON.parse(localStorage.getItem('user'));


// ---------------------- Form: If there is data in the form, then
// Use the dom to add it to the class element in the HTML-------------------------
//right now this will only adding to the first instance of the class. 
// If I am going to use more than one class on a page I think I need to modify to use .querySelectorAll
if (savedUser) {
    // The document.queryselector()... below does not work when a page does not use one of these classes.So I will create an if statement that says
    // if the class is on the page, then add the textContent
    // document.querySelector('.name').textContent = savedUser.name;
    // document.querySelector('.pet').textContent = savedUser.pet;

    const nameElement = document.querySelector('.name')
    const commaNameElement = document.querySelector('.comma-name')
    const petElements = document.querySelectorAll('.pet')
    
    if (nameElement) {
        nameElement.textContent = savedUser.nameInput;
    }
    if (petElements.length > 0) {
        petElements.forEach(onePet => {
        onePet.textContent = savedUser.petInput;
        });
    }
    // function addPetName
    
     if (commaNameElement) {
        commaNameElement.textContent = `, ${savedUser.nameInput}`;
    }   
    // Add a comma and space if the class is commaName ↑  (↓ does not work if class is missing on page)
    // document.querySelector('.comma-name').textContent = `, ${savedUser.name}`;

}



// -----------------------------------Routes Object------------------------------
const routes = [
    {
    routeName: "Provo River Parkway – Bridal Veil Falls loop from Provo Central",
    bike: true,
    walk: false,
    difficulty: "moderate",
    miles: 13.9,
    link: "https://www.komoot.com/smarttour/38440203",
    imageUrl: "images/routeBridalVeil.webp"
        
    },
    {
    routeName: "Murdock Canal Trail – Murdock Canal Trail loop from Provo",
    bike: true,
    walk: false,
    difficulty: "easy",
    miles: 27.2,
    link: "https://www.komoot.com/smarttour/44401686",
    imageUrl: "images/murdockCanal.webp"
    },
    {
    routeName: "Provo River Parkway – Provo River Parkway loop from Provo",
    bike: true,
    walk: false,
    difficulty: "easy",
    miles: 18.4,
    link: "https://www.komoot.com/smarttour/44402821",
    imageUrl: "images/routeProvoRiverTrail.webp"
    },
    {
    routeName: "Provo River Parkway – Provo River loop from Indian Road Trailhead",
    bike: true,
    walk: false,
    difficulty: "moderate",
    miles: 23.3,
    link: "https://www.komoot.com/smarttour/45149132",
    imageUrl: "images/routeProvoRiverParkway.webp"
    },
    {
    routeName: "Y Mountain Trail",
    bike: false,
    walk: true,
    difficulty: "hard",
    miles: 3.62,
    link: "https://www.komoot.com/smarttour/e2813335242/y-mountain-trail",
    imageUrl: "images/routesYMountain.webp"
    },
    {
    routeName: "Bonneville Shoreline Trail: Rock Canyon Park Connector",
    bike: false,
    walk: true,
    difficulty: "moderate",
    miles: 1.56,
    link: "https://www.komoot.com/smarttour/e2813398276/bonneville-shoreline-trail-rock-canyon-park-connector",
    imageUrl: "images/routeBonneville.webp"
    },    
    {
    routeName: "Lover's Lane Trail",
    bike: false,
    walk: true,
    difficulty: "easy",
    miles: 1.90,
    link: "https://www.komoot.com/smarttour/e2813429030/lover-s-lane-trail",
    imageUrl: "images/routesLoversLane.webp"
    }   
]







// -----------------------------------------------------------recreation routes filter------------------------------------------------------

routes.forEach(routes => {
    
    // card
    const card = document.createElement("figure");
    //optional class for routes card - I think I will select by #routes section{} in the css instead
    // card.classList.add("routes-card");
    
    
    // Title Element
    const title = document.createElement("h3");
    title.textContent = routes.routeName;
    
    // Miles
    const miles = document.createElement("p");
    miles.innerHTML = `<strong>Miles:</strong> ${routes.miles}`;
    
    //create the link information
    
    //Komoot Route Page
    const routePage = document.createElement("p");
    routePage.innerHTML = `<a href = ${routes.link}>Komoot Route Details</a>`;

    // Difficulty
    const difficulty = document.createElement("p")
    difficulty.innerHTML = `<strong>Difficulty:</strong> ${routes.difficulty}`;
    
    // Create the alt
    const alt = `An image of the ${routes.routeName} route in Provo, Utah`;
    // Add the image
    const thumbIMG = document.createElement("img");
    thumbIMG.src = routes.imageUrl;
    // add the alt to the image
    thumbIMG.alt = alt;
    // Add the width and height
    thumbIMG.width = 400;
    thumbIMG.height = 240;
    // Add Lazy Loading to the image
    thumbIMG.setAttribute("loading", "lazy");
   
    // Turn off all cards
    card.style.setProperty("display", "none")
    
    const routeDifficulty = routes.difficulty;
    const bikeRoute = routes.bike;
    const walkRoute = routes.walk;
    // const routeMiles = routes.miles;
    
    if (routeDifficulty == "easy") {
        card.classList.add("small");
    };
    if (routeDifficulty == "moderate") {
        card.classList.add("moderate");
    };
    if (routeDifficulty == "hard") {
        card.classList.add("hard");
    };
    if (bikeRoute) {
        card.classList.add("bike");
    };
    if (walkRoute) {
        card.classList.add("walk");
    };
    
    
    // Add individual elements to "Card"
    card.appendChild(title);
    card.appendChild(miles);
    card.appendChild(difficulty);
    card.appendChild(thumbIMG);
    // route information on komoot
    card.appendChild(routePage)


    // Find #routes in HTML and add "Card" 
    const container = document.getElementById('routes');
    container.appendChild(card);

    
});