var cityInput = document.querySelector('.city-input').value;
var Condition = JSON.parse.getAttribute(weather.id);
var butTon = document.querySelector('.weather-button');
var Params = JSON.parse.getAttribute(weather.main);
var Descrip = JSON.parse.getAttribute(weather.description);
var Pic = JSON.parse.getAttribute(weather.icon);
var Temp = JSON.parse.getAttribute(main.temp);
var bigBoard = document.querySelector('.city-date-icon');
var weather1 =  document.querySelector('.past1'); 
var weather2 =  document.querySelector('.past2'); 
var weather3 =  document.querySelector('.past3'); 
var weather4 =  document.querySelector('.past4'); 
var weather5 =  document.querySelector('.past5'); 
var weather6 =  document.querySelector('.past6'); 
var apiKey = '3071f7a578965b683c18b72b89763dce';

// var weather = ;
// var localWeather = ;

var date = document.getElementById('date');
date.textContent = dayjs().format('dddd MMMM D');



                        // Event listener on click for search
butTon.addEventListener('click', (fetchWeather));

    function fetchWeather (){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=imperial&appid=' + apiKey)
     
        .then(function (response) {
        return response.json();
      })
    
      .then(function (data) {
        console.log(data);
        window.TEST = data;
      })};







//var storedWeather = weather1.textContent;

//async function getWeather() {fetch('https://api.openweathermap.org/data/2.5/weather?q=' + citySend + '&units=imperial&appid=' + apiKey)
//.then(response => { 
//console.log(response); }
//}



//function insertName (city) {
//    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=imperial&appid=' + apiKey)
//    .then(response => { 
//    console.log(response); }
    
//    button.addEventListener("click", function () {
//        function insertName(inputCity.value)
//    });




