const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


const temp = 27;
const windSpeed = 34;


const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);


const windChillElement = document.getElementById("windchill");

if (temp <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}