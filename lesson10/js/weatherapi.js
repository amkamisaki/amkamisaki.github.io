const weatherObject = new XMLHttpRequest();

weatherObject.open("GET","https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=02ad1bdd62f910cc3245193223e89746ad&units=imperial", true);
weatherObject.send();
weatherObject.onload = function() {
   let weatherInfo = JSON.parse(weatherObject.responseText);
   console.log(weatherInfo);

   document.getElementById("place").innerHTML = weatherInfo.name;
   document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;

} // end of onload



/*const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=20166b3a796e025a536c9db9d87c1ebd";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });*/
