
// ------Add Event Listener
const d = new Date();
const year = d.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;


// -------Products
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


const productOptions = document.querySelector('.js-products');

products.forEach(products => {
  // Create Drop Down Product "Option" element
  const option = document.createElement('option');
  option.textContent = products.name;
  option.setAttribute("value", products.id);
  //add option to the document
  productOptions.appendChild(option);
});


