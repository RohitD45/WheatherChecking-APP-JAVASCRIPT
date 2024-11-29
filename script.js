const btn = document.getElementById("btn");
const input = document.querySelector("input");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");


btn.addEventListener("click",()=>{
    let city = input.value;
    getWeatehr (city);
})

function getWeatehr(city){
    const apiKey = "099887b4a60457699cca774d95f15abe"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q={city}&APPID={apiKey}`)
    .then(Response => Response.json())
    .then(data => 
        console.log(data));
        const iconCode = data.weather[0].icon;       
        icon.innerHTML=` <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather icon"/>`

        const weatherCity= data.name;
        const weatherCountry= data.sys.country;
        weather.innerHTML = `Weather in ${weatherCity}, ${weatherCountry}`;

       

        const weatherTemp = data.main.temp;
        weatherTemp=weatherTemp -273;
        const temp= weatherTemp.toFixed(2);
        temperature.innerHTML=`${temp} °C`;

        const weatherDesc = data.weather[0].description;
        description.innerHTML=weatherDesc;
}






// const apikey='0379f6516959a242d2f8a430fd5f8b2c'
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}