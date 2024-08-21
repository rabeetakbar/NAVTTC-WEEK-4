// function getWeather() {
//     const city = 'lahore'; // Replace with any city name you want to test
//     const apiKey = 'd78748df85a260e606c28c4e0b4f4273'; 
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('City not found');
//             }
//             return response.json();
//         })
//         .then(data => {
//             displayWeather(data);  
//         })
//         .catch(error => {
//             console.error('Error:', error.message);
//         });
// }

// function displayWeather(data) {
//     console.log(`City: ${data.name}`);
//     console.log(`Temperature: ${data.main.temp}°C`);
//     console.log(`Weather: ${data.weather[0].description}`);
//     console.log(`Humidity: ${data.main.humidity}%`);
//     console.log(`Wind Speed: ${data.wind.speed} m/s`);
// }

// // Call the function to fetch weather data
// getWeather();



function getWeather() {
    const cityInput = document.getElementById('cityInput').value || 'Lahore';
    const apiKey = 'd78748df85a260e606c28c4e0b4f4273'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);  
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = `City: ${data.name}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weatherDescription').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weatherDisplay').style.display = 'block';
}

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
