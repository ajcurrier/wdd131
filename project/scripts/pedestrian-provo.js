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



// -----------------------------------Routes------------------------------
// const routes = [
//     {
//     routeName: "Provo River Parkway – Bridal Veil Falls loop from Provo Central",
//     bike: true,
//     walk: false,
//     difficulty: "moderate",
//     miles: 13.9,
//     link: "https://www.komoot.com/smarttour/38440203",
//     imageUrl: "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k8/uq/uqq6mluhk3ug1zzqv3x230sp4vqw6e81-uhi69015505/0?width=2048&crop=false&q=80"
        
//     },
//     {
//     routeName: "Murdock Canal Trail – Murdock Canal Trail loop from Provo",
//     bike: true,
//     walk: false,
//     difficulty: "easy",
//     miles: 27.2,
//     link: "https://www.komoot.com/smarttour/44401686",
//     imageUrl: "https://www.komoot.com/smarttour/44401686/embed?layout=map&amp;width=100%25&amp;height=540&amp;image=1&amp;hm=false"
//     },
//     {
//     routeName: "Provo River Parkway – Provo River Parkway loop from Provo",
//     bike: true,
//     walk: false,
//     difficulty: "easy",
//     miles: 18.4,
//     link: "https://www.komoot.com/smarttour/44402821",
//     imageUrl: "https://www.komoot.com/smarttour/44402821/embed?layout=map&amp;width=100%25&amp;height=540&amp;image=1&amp;hm=false"   
//     },
//     {
//     routeName: "Provo River Parkway – Provo River loop from Indian Road Trailhead",
//     bike: true,
//     walk: false,
//     difficulty: "moderate",
//     miles: 23.3,
//     link: "https://www.komoot.com/smarttour/45149132",
//     imageUrl: "https://www.komoot.com/smarttour/45149132/embed?layout=map&amp;width=100%25&amp;height=540&amp;image=1&amp;hm=false"   
//     },
//     {
//     routeName: "",
//     bike: true,
//     walk: false,
//     difficulty: "",
//     miles: 1,
//     link: "",
//     imageUrl: ""   
//     }    
// ]


