import React, { useEffect, useState } from "react";
import "../../css/desktop/Search.css"

function Search(props){
    const [value,setValue] = useState();
    function addLocalStorage(e){
        localStorage.setItem(e.toString(), e.toString());
    }

    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(value);
        addLocalStorage(value);

    }
    function handleChange(e){
        setValue(e.target.value)
    }

    useEffect(() => {
        // console.log(value);
    }, [value])
    return(
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search city or postcode" onChange={handleChange}/>
                {/* hidden with css */}
                <input type="submit"/>
            </form>

        </div>
    )
}
export default Search;