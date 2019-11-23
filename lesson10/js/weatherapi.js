const weatherObject = new XMLHttpRequest();

weatherObject.open("GET","//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=20166b3a796e025a536c9db9d87c1ebd&units=imperial", true);
weatherObject.send();
weatherObject.onload = function() {
   let weatherInfo = JSON.parse(weatherObject.responseText);
   console.log(weatherInfo);

   document.getElementById("place").textContent = weatherInfo.name;

} // end of onload



/*const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=20166b3a796e025a536c9db9d87c1ebd";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });*/
