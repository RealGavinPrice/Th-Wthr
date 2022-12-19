var apiKey = "3071f7a578965b683c18b72b89763dce";
var weather1 =  document.querySelector('.past1'); 
var weather2 =  document.querySelector('.past2'); 
var weather3 =  document.querySelector('.past3'); 
var weather4 =  document.querySelector('.past4'); 
var weather5 =  document.querySelector('.past5'); 
var weather6 =  document.querySelector('.past6'); 
//JSON.stringify(coord);//{city name},{state code},{country code}//
var Condition = JSON.parse(weather.id);
var weatherClick = document.querySelector('.weather-button');
var Params = JSON.parse(weather.main);
var Descrip = JSON.parse(weather.description);
var Pic = JSON.parse(weather.icon);
var Temp = JSON.parse(main.temp);
var cityInput = document.querySelector('.city-input');
var citySend = cityInput.value;

var date = document.querySelector('.th-wthr');




date.textContent = dayjs().format('MM/DD/YY');

var storedWeather = weather1.textContent;


var pastCity = 

async function getWeather() {fetch('https://api.openweathermap.org/data/2.5/weather?q=' + citySend + '&units=imperial&appid=' + apiKey)
.then(response => { 
console.log(response); }
}

var weatherPrint = JSON.parse(localWeather)





weatherClick.addEventListener('click', getWeather)


// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}