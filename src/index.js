function displayTemperature(response) {
  let temperatureElement=document.querySelector("#temperature");
  let cityElement=document.querySelector("#city");
  temperatureElement.innerHTML = Math.round (response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  
}

let apiKey = "13c250c9139660bdb6fb8b5c81e33bd0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);