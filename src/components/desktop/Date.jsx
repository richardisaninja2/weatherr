import React, { useEffect, useState } from "react";

function Date(props){

   

    const [mounted, setMounted] = useState(false);
    const[date, setDate] = useState();

    useEffect(() => {
        if(!mounted){
            setMounted(true);
            return;
        }
        setDate(props.date)
        console.log(date)
    }, [props])




    return(
        <div>
            {date}
        </div>
    )
}
export default Date;