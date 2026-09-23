const d = new Date();
const year = d.getFullYear();

document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").textContent = document.lastModified;

// Weather variables
let temperature = 45;
const windSpeed = 10;

// HTML elements
const temperatureSlider = document.getElementById("temperatureSlider");
const temperatureValue = document.getElementById("temperatureValue");
const windChillValue = document.getElementById("windChill");

// Wind chill calculation
function calculateWindChill(temp, wind) {
  if (temp <= 50 && wind > 3) {
    const windChill =
      35.74 +
      (0.6215 * temp) -
      (35.75 * Math.pow(wind, 0.16)) +
      (0.4275 * temp * Math.pow(wind, 0.16));

    return windChill.toFixed(1);
  }

  return temp.toFixed(1);
}

// Update the displayed temperature and wind chill
function updateWeather() {
  temperature = Number(temperatureSlider.value);

  temperatureValue.textContent = temperature;
  windChillValue.textContent = calculateWindChill(temperature, windSpeed);
}

// Update live while dragging the slider
temperatureSlider.addEventListener("input", updateWeather);

// Display the initial values
updateWeather();
