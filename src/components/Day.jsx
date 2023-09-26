import { useEffect, useState } from "react";
import React from "react";


function Day(prop){
    const condition = prop.condition;
    // console.log(prop.condition)
    const [date, setDate] = useState("");

    function getDay(){
        const date = Date().substring(0,11);
        setDate(date);
    }

    useEffect(() => {
        getDay();
    }, [])

    return(
        <div className="day">
            <p>{date}</p>
            {/* put weather detail */}
            <p className="detail">{condition}</p>
        </div>
    )
}
export default Day;