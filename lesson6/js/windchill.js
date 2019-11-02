var temp = parseFloat(document.getElementById("temp").value);
var wSpeed = parseFloat(document.getElementById("wind").value);

wChill = 35.74 + 0.6215 * temp - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));

if (temp <= 50 && wSpeed >= 3) {
    document.getElementById("windChill").innerHTML = wChill.toFixed(0) + "\xB0F";
}
else {
    document.getElementById("windChill").innerHTML = "N/A"
}
