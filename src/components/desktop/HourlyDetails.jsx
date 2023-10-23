import React, { useEffect, useState } from "react";
import "../../css/desktop/HourlyDetails.css"
import { Link, useNavigate } from "react-router-dom";
import feelsLike from "../../icons/feelsLike.svg"
import wind from "../../icons/Wind.svg"
import windGust from "../../icons/windGust.svg"
import uv from "../../icons/uv-index.svg"
import rain from "../../icons/rain.svg"
import cloud from "../../icons/Cloudy.svg"
export default function HourlyDetails(props){
    const[hour, setHour] = useState();
    console.log(props.hour)
    useEffect(() => {
        setHour(props.hour)
    },[props])

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }
    

    if(hour){
        return(
            <div className="hDetails">
                <p>Hourly Forecast</p>
                <div className="hDetailsInside">
                    <div className="middle"><img className="mobileSvg" alt={hour.condition.text} src={require('../../icons/'+hour.condition.text+'.svg')}/><h1>{Math.round(hour.temp_f)}&deg;F</h1></div>
                    <p className="underMiddle">{hour.condition.text}</p>
                    <span><p><span><img className="svg" alt={feelsLike} src={feelsLike}/>Feels Like</span></p> <p>{hour.feelslike_f}</p></span>
                    <span><p><span><img className="svg" alt={wind} src={wind}/>Wind Gust</span></p> <p>{Math.round(hour.wind_mph)} mph</p></span>   
                    <span><p><span><img className="svg" alt={uv} src={uv}/>UV Index</span></p> <p>{Math.round(hour.uv)}</p></span>   
                    <span><p><span><img className="svg" alt={rain} src={rain}/>Precipitation</span></p> <p>{hour.precip_in} in</p></span>   
                    <span><p><span><img className="svg" alt={cloud} src={cloud}/>Cloud Cover</span></p> <p>{hour.cloud}%</p></span>      
                </div>
                <div className="close" onClick={routeChange}>Close</div>
            </div>
        )   
    }else{
        return(
            <p>..loading</p>
        )
    }

}