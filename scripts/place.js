const d = new Date();
const year = d.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;

// Weather Variables
const temperature = 72;
const windSpeed = 10;

// Wind Chill Calculation
function calculateWindChill(temp, wind) {
    if (temp <= 50 && wind > 3) {
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill;
    }
    return temperature;
}

const windChill = calculateWindChill(temperature, windSpeed)

document.getElementById("windChill").textContent = windChill