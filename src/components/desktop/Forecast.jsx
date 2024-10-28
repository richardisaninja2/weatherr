//Desktop
import React, { useEffect, useState } from "react";
import "../../css/desktop/Forecast.css"
import '../../icons/rain.svg';
import classNames from "classnames";

function Forecast(props){
    const[isLoading, setIsLoading] = useState(true);
    const[forecast, setForecast] = useState()
    const[size, setSize] =  useState(3)

    const onClick = () => {
        return setSize(10);
    };

    useEffect(() => {
        setForecast(props.forecast);
        if(forecast != undefined){
            setIsLoading(false)
        }    

        // console.log(forecast)
        // console.log(size)
        
    }, [forecast, size, props])

    if(isLoading){return(<p>...Loading</p>)}
    else{
        // return(
        //     <div className={classNames("forecastDiv")}>
        //         <div className=" forBeside">
        //             <p className="fHeader">Forecasts</p>
        //                 {/* for toggle button */}
        //             <label onClick={() => {onClick()}} className="switch">
        //             <input type="checkbox" id="togBtn"/>
        //             <div className="slider round"></div>
        //             </label>
        //         </div>
        //         {Object.keys(forecast).slice(0, size).map((item,i) => (
        //             <div key={i} className="forecastIndiv">
        //                 <img className="mobSvg" src={require('../../icons/'+forecast[item].day.condition.text+'.svg')}/>
        //                 <p>{forecast[item].day.maxtemp_f.toString().substring(0,3)}
        //                     <span className="small">/</span>
        //                     <span className="small">{forecast[item].day.mintemp_f.toString().substring(0,3)}</span>
        //                 </p>
        //                 <p className="otherSide">{forecast[item].date.toString().substring(5,11)}</p>
        //             </div>
        //         ))}
        //     </div>
        // )
        return(
            <div className="forecastSide">
                {/* {console.log(forecast[0].day)} */}
                <img className="mobSvg1" src={require('../../icons/'+forecast[0].day.condition.text.trim()+'.svg')}/>
                <div className="marginNeg">
                    <p className="temp left10">{Math.round(forecast[0].day.maxtemp_f)}&deg;F/{Math.round(forecast[0].day.mintemp_f)}&deg;F</p>
                    <p className="left10">{forecast[0].date}</p>
                    <div className="innerDiv">
                        <img className="mobSvg2 left10" src={require('../../icons/'+forecast[0].day.condition.text.trim()+'.svg')}/>
                        <p className="">{forecast[0].day.condition.text}</p>
                    </div>
                    <div className="innerDiv">
                        <img className="mobSvg2 left10" src={require('../../icons/rain.svg').default}/>
                        <p className="">Rain - {forecast[0].day.daily_chance_of_rain}%</p>
                    </div>
                </div>
                


            </div>
        )
    }

}
export default Forecast;