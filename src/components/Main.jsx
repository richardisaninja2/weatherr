import React, { useEffect, useRef, useState } from "react";
import Day from "./Day";
import Temp from "./Temp";
import Location from "./Location";
import DailySummary from "./DailySummary";
import WeatherSpecifics from "./WeatherSpecifics";

import '../css/Main.css';
import axios from "axios";

function Main(){
    const[isLoading,setIsLoading] = useState(true);
    const[location, setLocation] = useState();
    const [data, setData] = useState(true);
    const [forecast, setForecast] = useState({});
    const[forecastHour, setForecastHour] = useState();
    const [specifics, setSpecifics] = useState({});
    const[temp, setTemp] = useState("");
    const initialized = useRef(false);
    const [condition, setCondition] = useState();
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")

    // const successCallback = (position) => {
    //     console.log( "latitude " +position.coords.latitude)
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude)  
    // }
    // //fires off function to get lat and longitude
    // navigator.geolocation.getCurrentPosition(successCallback);






        const getRequest = async ()=> {
            
            await axios.get("http://api.weatherapi.com/v1/forecast.json?key=84487a92cee24d95bff41045232309 &q=33.1334561,-96.6466561&days=5&aqi=no&alerts=no").then(res => {
                    
                    setIsLoading(false);
                    const weatherDetails = res.data.current;
                    setLocation(res.data.location)
                    setData(res);
                    //set temp value
                    console.log();
                    setTemp(res.data.current.temp_f);
                    //set weather condition
                    setCondition(res.data.current.condition.text)
                    setForecast(res.data.forecast.forecastday)
                    setForecastHour(res.data.forecast.forecastday[0].hour)
                    setSpecifics ({
                    Wind:{
                        icon: "Wind",
                        value: weatherDetails.humidity + " mp/h",
                        name: "Wind"},
                    Humidity: {icon: "Humidity",
                        value: weatherDetails.humidity + "%",
                        name: "Humidity"},
                    Visibility: {icon: "Visibility",
                        value: weatherDetails.vis_miles + " miles",
                        name: "Visibility"}}
                    )
                }).catch(err => {
                    console.log(err)
                })
               
        }
        useEffect(() => {
            setIsLoading(true);
            if(!initialized.current){
                initialized.current = true;
                
                getRequest();
                setIsLoading()     
            }
            setIsLoading(false);
            // console.log(data.data.location)

        },[data, forecast, specifics])
    
    if(isLoading){
        return "Loading...";
    }
    else{
          return(
        <div>
            <Location location={location}/>
            <Day condition={condition}/>
            <Temp prop={temp}/>
            {/* <DailySummary/> */}
            <WeatherSpecifics prop={specifics} forecast={forecast} forecastHour={forecastHour}/> 
        </div>
    )  
    }

}

export default Main;