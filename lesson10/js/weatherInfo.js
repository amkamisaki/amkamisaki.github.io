const weatherObject = new XMLHttpRequest();

weatherObject.open("GET", "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=73bb36bc52c2326776438d6ada69eb9d&units=imperial", true);
weatherObject.send();
weatherObject.onload = function() {
   let weatherInfo = JSON.parse(weatherObject.responseText);
   console.log(weatherInfo);

   document.getElementById("currently").innerHTML = weatherInfo.weather[0].main;
   document.getElementById("tempnow").innerHTML = weatherInfo.main.temp;
   document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;
   document.getElementById("wind").innerHTML = weatherInfo.wind.speed;

   function windChill() {
    var temp = parseFloat(document.getElementById("tempnow").textContent);
    var wSpeed = parseFloat(document.getElementById("wind").textContent);
    
    wChill = 35.74 + 0.6215 * temp - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));
    
    if (temp <= 50 && wSpeed > 3) {
        document.getElementById("windChill").innerHTML = wChill.toFixed(0) + "\xB0F";
    }
    else {
        document.getElementById("windChill").innerHTML = "N/A";
    }
   }
   windChill();

} // end of onload

  






    
   

