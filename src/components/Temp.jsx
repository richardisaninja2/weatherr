import React from "react";
import "../css/Temp.css";

function Temp(prop){
    const temp = prop.prop;
    return(
        <div>
            <div className="tempBig">
                <h1>{temp}&#x00B0;F</h1>
            </div>
        </div>
    )
}
export default Temp;