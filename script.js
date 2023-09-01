const options = {
    method: 'GET', 
    headers: {
        'X-RapidAPI-Key': 'd8f1176738msh4142435121e95fap1b2408jsnd717c1db0b6a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeatehr = (city) => {
    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ' + city, options)
        .then(response => response.json())
 
        .then(response => {
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed2.innerHTML = response.wind_speed;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
        
            // Convert and display sunrise and sunset timestamps
            sunrise.innerHTML = unixTimestampToDateTime(response.sunrise);
            sunset.innerHTML = unixTimestampToDateTime(response.sunset);
        })



        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault(); // page load nahi
    getWeatehr(city.value)
})

 


// Function to convert Unix timestamp to a readable date and time format
function unixTimestampToDateTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}
