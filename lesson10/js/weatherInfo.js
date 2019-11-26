const weatherObject = new XMLHttpRequest();

weatherObject.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=73bb36bc52c2326776438d6ada69eb9d&units=imperial", true);
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

  /* const iconcode = weatherInfo.weather[0].icon;
   const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
   console.log(icon_path);
   document.getElementById("weather_icon").src = icon_path;*/

} // end of onload

//What is Today's encoded Date?
const dnow = new Date();
//console.log(d);

//What day of the week is it?
const todayDayNumber = dnow.getDay();
//console.log(todayDayNumber);

//Build my own array to convert the day to a word
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// Now what is today's day name?
//console.log(weekday[todayDayNumber]);




let forecastObject =  new XMLHttpRequest();

forecastObject.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=73bb36bc52c2326776438d6ada69eb9d&units=imperial", true);
forecastObject.send();

forecastObject.onload =  function() {
let forecastInfo = JSON.parse(forecastObject.responseText);
console.log(forecastInfo);

let list = forecastInfo.list;
//console.log(list.length);

let forcastDayNumber=todayDayNumber;
for (i = 0; i < list.length; i++) {
    
    var time = list[i].dt_txt;
    //console.log(i + "--" + time);
    
    if (time.includes('18:00:00')) {
        console.log("Noon on day "+i + "--" + time);
        //console.log(forecastInfo.list[i].main.temp+ "Â°");
        
        forcastDayNumber += 1;
        if (forcastDayNumber === 7){forcastDayNumber = 0;}
        console.log(forcastDayNumber);
        
        var theDayName = document.createElement("span");
        theDayName.textContent = weekday[forcastDayNumber];
        console.log(">"+weekday[forcastDayNumber]);
        
        var theTemp = document.createElement("p");
        theTemp.textContent = forecastInfo.list[i].main.temp + "\xB0";
        console.log(">"+forecastInfo.list[i].main.temp);
        
        var iconcode = forecastInfo.list[i].weather[0].icon;
        var iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        var theIcon = document.createElement("img");
        theIcon.src=iconPath;
        
        var theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);
        
        document.getElementById('forecast').appendChild(theDay);
    } // end if
} //end for






//var iconcode = weatherInfo.weather[0].icon;
//var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";

//document.getElementById('weather_icon').src = icon_path;
} // end of function
