const weatherObject = new XMLHttpRequest();

weatherObject.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=035595da61bbb78c1498b8e8863b9151&units=imperial", true);
weatherObject.send();
weatherObject.onload = function() {
   let weatherInfo = JSON.parse(weatherObject.responseText);
   console.log(weatherInfo);

   document.getElementById("place").innerHTML = weatherInfo.name;
   document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;

} // end of onload



