/*const weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=035595da61bbb78c1498b8e8863b9151&units=imperial", true);
weatherObject.send();
weatherObject.onload = function() {
   let weatherInfo = JSON.parse(weatherObject.responseText);
   console.log(weatherInfo);

   document.getElementById("currently").innerHTML = weatherInfo.weather[0].main;
   document.getElementById("tempnow").innerHTML = weatherInfo.main.temp;
   document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;
   document.getElementById("wind").innerHTML = weatherInfo.wind.speed;

   function windChill() {
    var temp = parseFloat(document.getElementById("tempnow").innerHTML);
    var wSpeed = parseFloat(document.getElementById("wind").innerHTML);
    
    wChill = 35.74 + 0.6215 * temp - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));
    
    if (temp <= 50 && wSpeed > 3) {
        document.getElementById("windChill").innerHTML = wChill.toFixed(0) + "\xB0F";
    }
    else {
        document.getElementById("windChill").innerHTML = "N/A";
    }
   }
   windChill();

} // end of onload*/

const weatherObject = new XMLHttpRequest();
weatherObject.open ("GET","//api.openweathermap.org/data/2.5/weather?id=5604473&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1", true );
weatherObject.send();
weatherObject.onload = function() {
  let weatherInfo = JSON.parse(weatherObject.responseText);
  //console.log(weatherInfo);

  document.getElementById('currently').innerHTML = weatherInfo.weather[0].main;
  document.getElementById('tempnow').innerHTML = weatherInfo.main.temp;
  document.getElementById('humidity').innerHTML= weatherInfo.main.humidity;
  document.getElementById('wind').innerHTML = weatherInfo.wind.speed;
 
  function calcWindChill() {
    var temp = parseFloat(document.getElementById('tempnow').textContent);
    var speed = parseFloat(document.getElementById('wind').textContent);
  
    windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
  
    if (windchill <= 50 && speed > 3) {
      document.getElementById('windChill').textContent = windchill.toFixed(0) + "\xB0F";
    } else {
      document.getElementById('windChill').textContent = "NA";
    }
  }
  calcWindChill();

} // end of onload

  






    
   

