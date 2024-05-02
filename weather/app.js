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
    const iconUrl = data.current.condition.icon.startsWith('http') ? data.current.condition.icon : `https://${data.current.condition.icon}`;

    currentDetails.innerHTML = `
        

        <p>Time: ${new Date().toLocaleTimeString()}</p>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <img src="${iconUrl}" alt="Weather Icon">

        <p>Condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity} %</p>
        
        
    `;
}


function displayForecast(forecast) {
    const forecastDetails = document.getElementById('forecast-details');
    forecastDetails.innerHTML = forecast.map(day => {
        const iconUrl = day.day.condition.icon.startsWith('http') ? day.day.condition.icon : `https://${day.day.condition.icon}`;
        return `
            <div>
                <h3>${day.date}</h3>
                <img src="${iconUrl}" alt="Weather Icon">
                <p>Temperature: ${day.day.avgtemp_c}°C</p>
                <p>Condition: ${day.day.condition.text}</p>
                <p>Humidity: ${day.day.avghumidity} %</p>
                <p> ---------------------- </p>
            </div>
        `;
    }).join('');
}