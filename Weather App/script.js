let search = document.querySelector('#search');
let input = document.querySelector('input');
let country = document.querySelector('#country');
let feelsLikeText = document.querySelector('#feelsLikeText');
search.addEventListener('click',()=>{
    if(input.value){
        let name = input.value
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${name}&appid=00f3afc4416735b2b97f9996273f96c5`
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
        let humidityText = document.querySelector('#humidityText');
        let windText = document.querySelector('#windText');
        let temperatureText = document.querySelector('#temperatureText');
          console.log(data);
        //   console.log(data.main);
          let humidity = data.main.humidity;
          let temperature = data.main.temp;
          let windSpeed = data.wind.speed;
          let feelslike = data.main.feels_like;
          console.log(feelslike);
          feelsLikeText.innerText = feelslike +"°"+ " C"
          humidityText.innerText = humidity + "%"
          temperatureText.innerText = temperature +"°"+ " C"
          windText.innerText = windSpeed+"km/h"

          console.log("humidity = " + humidity);
          console.log("temperature = " + temperature);
          console.log("WindSpeed = " + windSpeed);
        })
        .catch((error) => {
          console.log("error",error);
        });
    }
})

