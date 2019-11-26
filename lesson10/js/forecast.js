fetch('https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=c4f26b47558cfc6a6aebf07554d017ad')
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

         let forecast = [];
          let icon = [];
          let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
         let list = jsObject.list;
        let day = 1;
        let ico = 1;
        let d = 1;
        var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

      for (let i = 1; i <= 5; i++) {
        jsObject.list.forEach(x => {
            if (x.dt_txt.includes('18:00:00')) {
                forecast[day] = x.main.temp;
                day++;
                icon[ico] = x.weather[0].icon;
                ico++;

                 days[d] = new Date(x.dt_txt);
                  n = weekday[days[i].getDay ()];
                   d++;
            
            
             let imagesrc = '//openweathermap.org/img/w/' +  icon[i] + '.png';
             document.getElementById("icon" + i).setAttribute('src', imagesrc);
             document.getElementById('temp' + i ).innerHTML = forecast[i];
             document.getElementById('day' + i ).innerHTML =  n ;
        }});

  

    }});