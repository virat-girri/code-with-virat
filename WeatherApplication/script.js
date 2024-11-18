const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#search-btn");
const weather_img = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const weather_body=document.querySelector('.weather-body');
const error_body=document.querySelector(".error-body");
weather_body.style.display="none"
async function checkWheather(city) {
  const Api_key = "c8b18fdc5721fe444d675ce3975713c2";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`;
  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  
  );
  if(weather_data.cod ==='404'){
        // console.log('error')
        error_body.style.display="block";
        weather_body.style.display="none"
    return;
  }
  else{
    error_body.style.display="none";
  }
  
   weather_body.style.display="flex"
  temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
  console.log(weather_data);

  description.innerHTML=`${weather_data.weather[0].description}`;
  humidity.innerHTML=`${weather_data.main.humidity} %`;
  wind_speed.innerHTML=`${weather_data.wind.speed} km/H`;

 
switch(weather_data.weather[0].main){

    case 'Clouds':weather_img.src="images/177833624_57e2bf27-f636-4172-9ad4-31d6507a728d.jpg";
    break;
    case 'Clear':weather_img.src="images/15244310_SL_031221_41450_08.jpg";
    break;
    case 'Rain':weather_img.src="images/8zg1_txhl_210603.jpg  ";
    break;
   
}
  
}
searchBtn.addEventListener('click',(e) => {
  checkWheather(inputBox.value);
  weather_body.style.display="block"
});
