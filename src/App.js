import './App.css';
import{Search,Mappin,Wind, MapPin} from 'react-feather';
import getweather from './api';
import { useState } from 'react';
import dateFormat from 'dateformat';
function App() {
  const[city,setcity]=useState("");
  const[weather,setweather]=useState({});

  const getweatherbycity=async()=>{
    const weatherdata=await getweather(city);
    setweather(weatherdata);
    setcity("");
  }
  const renderdate=()=>{

    let now =new Date();
    return dateFormat(now,"dddd, mmmm dS, h:MM TT");
  }

  
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className='input'>
        <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} placeholder='City Name'/>
        <button onClick={()=>getweatherbycity()}>
          <Search></Search>
        </button>
      </div>

      {weather && weather.weather &&
      <div className="content">
        <div className="location"> 
          <div className="mappin">
            <MapPin></MapPin>
          </div>
          <h2>{weather.name}</h2>
        </div>
       
        <div className="weatherdesc d-flex flex-c">
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}alt=""></img>
          <h3>{weather.weather[0].description}</h3>
        </div>
        <div className="tempstats">
          <h1>{weather.main.temp}<span> &deg;c</span></h1>
          <h3>Feels Like {weather.main.feels_like} <span> &deg;c</span></h3>
        </div>
        <div className="windstats">
            <Wind></Wind>
          <h3>Wind {weather.wind.speed} konts in {weather.wind.deg}&deg; </h3>
        </div>
         <p className="datetext">{renderdate()}</p>
      </div> }
      
      {!weather.weather && <div className="content">
        <h2>🌤 Weather Finder</h2>
        <p>To get started, type the name of any city into the search box above.</p>
        </div>
      }
      
       

      
    </div>
  );
}

export default App;
