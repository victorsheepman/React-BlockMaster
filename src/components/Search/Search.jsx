import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Search = ()=>{
    
    const { setSearch } =useContext(AppContext);
    let movieSearch = '';    
    const history = useHistory();

    //obtener el valor del input
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        movieSearch = event.target.value;

    }

    //buscar pelicula
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