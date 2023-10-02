import React, { useEffect, useState } from "react";
import "../../css/desktop/Hourly.css"
import "../../icons/Clear.svg"

function Hourly(props){
    const[isLoading,setIsLoading] = useState(true)
    const [city, setCity] = useState();
    const [region, setRegion] = useState();
    const[current,setCurrent] = useState();
    const[condition, setCondition] = useState();
    const[hourlyForecast, setHourlyForecast] = useState();

    useEffect(() => {

        setCity(props.location.name)
        setRegion(props.location.region)
        setCondition(props.current.condition.text)
        setHourlyForecast(props.forecastHour)
        setCurrent(props.current)
        setIsLoading(false);
        // console.log(props.forecastHour)

    }, [props])

    if(isLoading){
        return(<p>...loading</p>)
    }else{
        return(
            <div>
                <div className="hourly">
                    <div className="hSingle">
                        <img className="mobileSvg" src={require('../../icons/'+condition+'.svg')}/>
                        <div className="headings">
                            <p>{city}</p>
                            <p>{region}</p>
                        </div>
                        <div  className="headings">
                            <p>{current.temp_f}&#176;F</p>
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
                        { Object.keys(hourlyForecast).slice(0,24).map((item, i) => (
                            <div className="hInside" key={i}>
                                <p>{hourlyForecast[item].time.substring(10, 16)}</p>
                                <img className="mobileSvg" src={require('../../icons/'+hourlyForecast[item].condition.text+'m.svg')}/>
                                <p>{hourlyForecast[item].temp_f}</p>
                            </div>
                        ))}
                    </div>
                </div>
                    
            </div>
        )
    }
   
}

export default Hourly;