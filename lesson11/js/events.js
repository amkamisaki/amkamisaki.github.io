const reqURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(reqURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const city = document.getElementById("place").innerHTML;
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == city) {
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        
        h3.textContent = "Upcoming Events in " + city;
        p1.textContent = towns[i].events[0];
        p2.textContent = towns[i].events[1];
        p3.textContent = towns[i].events[2];
  
        card.appendChild(h3);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        
        
        document.querySelector('div.events').appendChild(card);
        }
  }
}
);
  