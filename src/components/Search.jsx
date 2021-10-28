import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";


const Search = ()=>{
    const { setSearch} = useContext(AppContext);
    let movieSearch = '';    
    const history = useHistory();
    const onSearchValueChange = (event) => {
        movieSearch = event.target.value;
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        setSearch(movieSearch)
        history.push('/search');
    }
    return(
        <form className="Search" onSubmit={handleSubmit}>
            <input onChange={onSearchValueChange} />
            <button type="submit">
                <img src="assets/icons/Property 1=search.svg" alt="" />
            </button>
        </form>
    )
}
export {Search}