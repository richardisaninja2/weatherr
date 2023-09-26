import React from "react";

function Location(props){
    const location = props.location;
    console.log(location)
    return(
        <div className="location">
            <p>{location.name}</p>
        </div>
    )
}
export default Location;