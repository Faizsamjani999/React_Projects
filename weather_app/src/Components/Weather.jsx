import axios from "axios"
import "./Weather.modules.css"
import { useState } from "react"
import Loading from "./Loading";


const Weather = ()=>{

    const [city,setCity] = useState("");
    const [location,setLocation] = useState("");
    const [cur,setCur] = useState("");
    const [other,setOther] = useState("");
    const [load,setLoad] = useState(true);

    const getResult = ()=>{
        setLoad(true);
        axios(`http://api.weatherapi.com/v1/current.json?key=3f354a8a71274751996124250241002&q=${city}`)
        .then((res)=>{
            console.log(res.data);
            setLocation(res.data.location)
            setCur(res.data.current)
            setOther(res.data.current.condition);
            setLoad(false)
        })
    }


    return(
        <div>
        
<div class="weather-card">
    <h1>{location.localtime}</h1>
  <div class="search">
    <input type="search" placeholder="enter city name" spellcheck="false" onChange={(val)=>{setCity(val.target.value)}} />
    <button onClick={getResult}>
      <i class="bi bi-search"></i>
    </button>
  </div>
  <>
  {
    load ? <Loading/> : 
    <div class="weather">
    <img class="weather-icon" src={other.icon} alt="..."/>
    <h1 class="temp">{cur.temp_c}C</h1>
    <p style={{fontSize:"30px",fontWeight:"bold"}}>{other.text}</p>
    <h2 class="city" style={{color:"yellow"}}>{location.name}</h2>
    <div class="details">
      <div style={{display:"flex"}} class="col">
        <img class="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"/>
        <div class="info">
          <p class="humidity">{cur.humidity}</p>
          <p>Humidity</p>
        </div>
      </div>
      <div class="col">
        <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png"/>
        <div class="info">
          <p class="wind">{cur.wind_kph}</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  </div>
  }
  </>
</div>
</div>
    )
}

export default Weather