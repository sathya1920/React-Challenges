import React, { useState } from 'react'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import drizzle from '../Assets/drizzle.png'
import humidity from '../Assets/humidity.png'
import rain from '../Assets/rain.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'
import '../WeatherApp/WeatherApp.css'
import search_icon from '../Assets/search.png'


function WeatherApp() {


    let apiKey = 'd3cd29e2f19e3842ba8985148c9af9e2';

    const [wicon, setWicon] = useState(cloud);

    const search = async ()=>{
        const element = document.getElementsByClassName('city');
        if(element[0].value ===''){
            alert('Enter City Name')
            
        }
        else
        {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName('humidity');
        const wind = document.getElementsByClassName('wind');

        const temperature = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
        temperature[0].innerHTML = data.main.temp+"°c";
        location[0].innerHTML = data.name;
        

        if(data.weather[0].icon ==="01d" || data.weather[0].icon ==="01n"){
            setWicon(clear);
        }else if(data.weather[0].icon ==="02d" || data.weather[0].icon ==="02n"){
            setWicon(cloud);
        }else if(data.weather[0].icon ==="03d" || data.weather[0].icon ==="03n"){
            setWicon(drizzle);
        }else if(data.weather[0].icon ==="04d" || data.weather[0].icon ==="04n"){
            setWicon(drizzle);
        }else if(data.weather[0].icon ==="09d" || data.weather[0].icon ==="09n"){
            setWicon(rain);
        }else if(data.weather[0].icon ==="10d" || data.weather[0].icon ==="10n"){
            setWicon(rain);
        }else if(data.weather[0].icon ==="13d" || data.weather[0].icon ==="13n"){
            setWicon(snow);
        }else{
            setWicon(clear)
        }
    }
    }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' placeholder='Search..' className='city' />
            <div className='search-icon'>
                <img src={search_icon} alt='search-icon' onClick={()=>{search()}} />
            </div>

        </div>
        <div className='weather-image'>
            <img src={wicon} alt='cloud'/>
        </div>
        <div className='weather-temp'>24°c</div>
        <div className="weather-location">London</div>
        <div className='data-container'>
            <div className="element">
                <img src={humidity} alt="humidity-percentage" className='icon' />
                <div className="data">
                    <div className="humidity">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind} alt="wind-speed" className='icon' />
                <div className="data">
                    <div className="wind">18kmph</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WeatherApp