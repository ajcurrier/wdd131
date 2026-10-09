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
// Get form by class
const form = document.querySelector("#wf1")


// ---------------------Form: Event Listener --------------------------
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent default interrupts normal get page load
    


    // ---------------------Form: Save Form input as a JS Object --------------------------
    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        pet: document.getElementById('pet').value,
    }
    // This would Save in local storage as individual values, instead of saving as an object
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const pet = document.getElementById('pet').value;

    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    // localStorage.setItem("pet", pet);


    // --------------------Form: add to localStorage-------------------------
    localStorage.setItem('user', JSON.stringify(userData)); // JSON.stringify converts the object to a string
                                //JSON (JavaScript Object Notation) is the text format used to store and exchange data.

})




// ---------------------- Form: Retrieve user object from localStorage-------------------------
const savedUser = JSON.parse(localStorage.getItem('user'));


// ---------------------- Form: If there is data in the form, then
// Use the dom to add it to the class element in the HTML-------------------------
//right now this will only adding to the first instance of the class. 
// If I am going to use more than one class on a page I think I need to modify to use .querySelectorAll
if (savedUser) {
    document.querySelector('.name').textContent = savedUser.name;
    document.querySelector('.pet').textContent = savedUser.pet;
    document.querySelector('.pet').textContent = savedUser.pet;
}
console.log(savedUser.pet)

