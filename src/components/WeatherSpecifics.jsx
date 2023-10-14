import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../css/Specifics.css";
import Wind from "../icons/Wind.svg";
import Humidity from "../icons/Humidity.svg"
import Sunny from "../icons/Sunny.svg";
import rain from "../icons/rain.svg";
import Overcast from "../icons/Overcast.svg"
import Partlycloudy from "../icons/Overcast.svg"

function WeatherSpecifics(props){
    const specifics = props.prop;
    
    const forecast = props.forecast;
    const forecastHour = props.forecastHour;
    const[image, setImage] = useState();
    // console.log(forecast)


    function imageChooser(e){
        if(e.includes("rain")){
            setImage("rain.svg");
        }
        else{
            setImage(e+".svg")
        }
    }

    return(
        <div>
            <div className="specificsContainer">
                {Object.keys(specifics).map((item, i) =>(
                    <div className="specifics" key={i}>

                        <img className="mobileSvg" src={require('../icons/'+specifics[item].icon+'.svg')}/>
                        <p >{specifics[item].value}</p>
                        <p >{specifics[item].name}</p>
                    </div>
                ))}
            </div>

            {/* section for hourly */}

            <div className="forecastHour">
                {forecastHour && Object.keys(forecastHour).slice(0,12).map((item, i) => (
                    <div key={i}>
                        <p>{forecastHour[item].time.substring(10, 16)}</p>
                        
                        <img className="mobileSvg" src={require('../icons/'+forecastHour[item].condition.text+'.svg')}/>
                        <p>{forecastHour[item].temp_f}</p>
                    </div>
                ))}
            </div>


                    {/* section for daily */}
            <div className="forecast">
                <h1>{Object.keys(forecast).length} Day Forecast</h1>
                {forecast && Object.keys(forecast).map((item, i) => (
                    <div key={i} className="forecastP">
                        <p>{forecast[item].date}</p>
                        
                        <img className="mobileSvg" src={require('../icons/'+forecast[item].day.condition.text+'.svg')}/>
                        {/* get ride of the decimal spaces in the temp in future */}
                        <p>{forecast[item].day.maxtemp_f.toString().substring(0, 2)}</p> 
                        <p>/</p>
                        <p>{forecast[item].day.mintemp_f.toString().substring(0, 2)}</p>
                        <p>{forecast[item].day.condition.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
 }
export default WeatherSpecifics;