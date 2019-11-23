const weatherObject = new XMLHttpRequest();

weatherObject.open("GET","//api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=035595da61bbb78c1498b8e8863b9151&units=imperial", true);
weatherObject.send();
weatherObject.onload = function() {
let weatherInfo = JSON.parse(weatherObject.responseText);


} // end of onload



/*const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=035595da61bbb78c1498b8e8863b9151";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });*/
