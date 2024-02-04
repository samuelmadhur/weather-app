function getWeather() {
  const locationInput = document.getElementById('location');
  const location = locationInput.value;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d1a9d142272d075af273e587f8ce8f0f`)
    .then(response => response.json())
    .then(data => {
      const weatherContainer = document.getElementById('weather-container');
      weatherContainer.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Description: ${data.weather[0].description}</p>
      `;
    })
    .catch((error) => {
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'Error fetching weather data. Please try again later.';
    });
}
