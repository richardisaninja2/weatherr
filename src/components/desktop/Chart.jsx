import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';
import "../../css/desktop/Chart.css"
import classNames from "classnames";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, //x axis
    LinearScale, //y axis
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale, //x axis
    LinearScale, //y axis
    PointElement
)

function Chart(props){

    const[isLoading, setIsLoading] = useState(true);
    const[forecast, setForecast] = useState();
    const[dateObj, setDateObj] = useState([]);
    const[tempObj, setTempObj] = useState([]);
    const[name, setName] = useState("maxtemp_f");
    const[title, setTitle] = useState();
    // function getX(){
    //     for(let days in Object.keys(forecast)){
    //         for(let key in forecast[days]){
    //             console.log("the dates" + forecast[days][key])
    //         }
    //     }
    // }

    function popArrays(a,b){
        for(var i = 0; i<forecast.length; i++){
            a[i] = forecast[i].date.toString().substring(5,10);
            if(name == "avghumidity"){
                b[i] = forecast[i].day.avghumidity
                setTitle("Humidity");
            }
            if(name == "avgvis_miles"){
                b[i] = forecast[i].day.avgvis_miles
                setTitle("Average Visibility in Miles");

            }if(name == "maxtemp_f"){
                b[i] = forecast[i].day.maxtemp_f
                setTitle("Highs");
            }
            
        }
    }


    useEffect(() => {

        setForecast(props.forecast);
        // // getX();

        if(forecast != undefined){
            popArrays(dateObj, tempObj);
            setIsLoading(false);
            // console.log(name)
        }
        

        // console.log(forecast);
        // console.log(dateObj)
        

    },[forecast, props, name])



    //charts data
    const data = {
        labels:Array.from(dateObj),
        datasets:[{
            label: 'Avg Temperatures of The Week',
            // data: [6, 3, 9],
            data: Array.from(tempObj),
            backgroundColor: 'none',
            borderColor: 'white',
            color: 'white',
            pointBorderColor: 'white',
            tension: 0.4
        }]
    }
    const options = {
        title:{
            display: 'overview',
            text: 'Overview of Highs',
            fontsize: 25
        },
        maintainAspectRatio: false,
        plugins:{
            legend: true
        },
        scales:{
            y:{
                // min: 3,
                // max: 6
            }
        }
    }

    function handleSubmit(e){
        e.preventDefault();
    }
    function onChange(e){
        setName(e.target.name);
        console.log(name)
    }

    


    if(isLoading){return(<p>...Loading</p>)}
    else{
        return(
            <div className={classNames("chartCont")}>
                <div className="spanCont">
                    <span>Overview of {title}</span>
                    <span>
                    <form  onSubmit={handleSubmit}>
                        <input type="checkbox"  checked={name === "maxtemp_f"}  name="maxtemp_f" onChange={() => setName("maxtemp_f")}/>
                        <label > Highs</label>
                        <input type="checkbox"  name="avghumidity" checked={name === "avghumidity"}  onChange={() => setName("avghumidity")}/>
                        <label > Humidity</label>
                        <input type="checkbox"  name="avgvis_miles" checked={name === "avgvis_miles"}  onChange={()=> setName("avgvis_miles")}/>
                        <label > Visibility</label>
                    </form> 

                    </span>
                </div>
                <div className="chart">
                {/* <span id="span">Overview</span> */}
                <Line
                label="Overview"
                height={300}
                width={600}
                data={data}
                options = {options}
                ></Line>   
                </div>
              
     
            </div>
        )
    }
    
}
export default Chart;