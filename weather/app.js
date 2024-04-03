document.getElementById('location-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const city = document.getElementById('city-input').value;
    fetchWeather(city);
});

async function fetchWeather(city) {
    const apiKey = 'e4302932fec649639d4193849242603';
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`);
    const data = await response.json();
    displayCurrentWeather(data);
    displayForecast(data.forecast.forecastday);
}

function displayCurrentWeather(data) {
    const currentDetails = document.getElementById('current-details');
    currentDetails.innerHTML = `
        
        <p>Time: ${new Date().toLocaleTimeString()}</p>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <img src="${data.current.condition.icon}">
        <p>Condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity} %</p>
    `;
}


function displayForecast(forecast) {
    const forecastDetails = document.getElementById('forecast-details');
    forecastDetails.innerHTML = forecast.map(day => `
        <div>
            <h3>${day.date}</h3>
            <img src="${day.day.condition.icon}">
            <p>Tempurate: ${day.day.avgtemp_c}°C</p>
            <p>Condition: ${day.day.condition.text}</p>
            <p>Humidity: ${day.day.avghumidity} %</p>
            <p> ---------------------- </p>
        </div>
    `).join('');
}
