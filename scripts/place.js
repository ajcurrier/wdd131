let temperature = 30;
let conditions = "Sunny";
let wind = 8;
let windChill = 0;


const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let lastModified = new Date(document.lastModified);

document.getElementById('currentYear').textContent = currentYear;

// code using template literals
// document.getElementById('lastModified').textContent = `Last Modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;

// without using template literals
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified.toLocaleDateString() + ' ' + lastModified.toLocaleTimeString();


function calculateWindChill(temperature, wind) {
    if (temperature > 10 || wind <= 4.8) {
      return "N/A";
    }
  
    let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temperature * Math.pow(wind, 0.16));
  
    return windChill.toFixed(2); // Returns the result rounded to two decimal places
  }
  

document.getElementById('temperature').innerHTML = temperature;
document.getElementById('conditions').innerHTML = conditions;
document.getElementById('wind').innerHTML = wind;
document.getElementById('wind_chill').innerHTML = calculateWindChill(temperature, wind);
