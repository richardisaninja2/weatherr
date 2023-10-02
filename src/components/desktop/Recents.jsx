import React, { useEffect, useState } from "react";
import "../../css/desktop/Recents.css"

function Recents(){
    // const[storage, setStorage] =  useState();


    const arr = [];
    function getStorageKeys(){
        for(var i = 0, len = localStorage.length; i<len; ++i){
            // console.log( localStorage.getItem( localStorage.key( i ) ) );
            arr[i] = localStorage.getItem( localStorage.key( i ) );
        }
    }
    getStorageKeys();

    useEffect(() => {
        
        // console.log(arr)
    },[arr])


    
    if(arr.length < 1){
        return(<p>..loading</p>)
    }else{
            return(
                
                <div >
                    {/* {console.log(arr)} */}
                    <div className="recents">
                        <div className="recInner">
                            {arr && arr.map((item, key) => (
                                <div key={item}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )   
    }
    
}
export default Recents;