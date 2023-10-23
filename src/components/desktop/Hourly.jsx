import React, { useEffect, useState } from "react";
import "../../css/desktop/Hourly.css"
import "../../icons/Clear.svg"
import { HashRouter, Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import HourlyDetails from "./HourlyDetails";
import Main from "../Main";

function Hourly(props){
    const[isLoading,setIsLoading] = useState(true)
    const [city, setCity] = useState();
    const [region, setRegion] = useState();
    const[current,setCurrent] = useState();
    const[condition, setCondition] = useState();
    const[hourlyForecast, setHourlyForecast] = useState();
    const[hour,setHour] = useState();

    const Hour = () => {
        const { i } = useParams();
        console.log(i)
      
      };
      console.log(hour)
    useEffect(() => {

        setCity(props.location.name)
        setRegion(props.location.region)
        setCondition(props.current.condition.text)
        setHourlyForecast(props.forecastHour)
        setCurrent(props.current)
        setIsLoading(false);
        // console.log(props.forecastHour)

    }, [props, hour])

    if(isLoading){
        return(<p>...loading</p>)
    }else{
        return(
            <div>
                <div className="hourly">
                    <div className="hSingle">
                        <img className="mobileSvg" alt={condition} src={require('../../icons/'+condition+'.svg')}/>
                        <div className="headings">
                            <p>{city}</p>
                            <p>{region}</p>
                        </div>
                        <div  className="headings">
                            <p>{Math.round(current.temp_f)}&#176;F</p>
                            <p>Temperature</p>
                        </div>
                        <div className="headings">
                            <p>{current.humidity}%</p>
                            <p>Humdidity</p>
                        </div>
                        <div className="headings">
                            <p>{current.wind_mph}<span> mp/h</span></p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
    
                    
                        
                    <div className="hDiv">
                       
                        { Object.keys(hourlyForecast).slice(0, hourlyForecast.length).map((item, i) => (
                            <NavLink to={'hour/' + i} key={i} onClick={() => setHour(i)}>
                                <div className="hInside" key={i}>
                                    {/* {console.log(hourlyForecast[i])} */}
                                    <p>{hourlyForecast[item].time.substring(10, 16)}</p>
                                    <img className="mobileSvg" alt={condition} src={require('../../icons/'+hourlyForecast[item].condition.text+'m.svg')}/>
                                    <p>{Math.round(hourlyForecast[item].temp_f)}&deg;F</p>
                                </div>
                            </NavLink>
                            
                            
                        ))}

                        <Routes>
                            <Route path="/hour/:id" element={<HourlyDetails hour={hourlyForecast[hour]}/>}/>
                        </Routes>
                    
                    </div>

                </div>
                    
            </div>
        )
    }
   
}

export default Hourly;