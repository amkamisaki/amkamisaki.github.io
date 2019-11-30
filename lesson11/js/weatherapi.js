const weatherObject = new XMLHttpRequest();

weatherObject.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=73bb36bc52c2326776438d6ada69eb9d&units=imperial", true);
weatherObject.send();
weatherObject.onload = function() {
   let weatherInfo = JSON.parse(weatherObject.responseText);
   console.log(weatherInfo);

   document.getElementById("place").innerHTML = weatherInfo.name;
   document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
   document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed;

   const iconcode = weatherInfo.weather[0].icon;
   const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
   console.log(icon_path);
   document.getElementById("weather_icon").src = icon_path;

} // end of onload



