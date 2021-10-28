import React from "react";
import DB from "../utils/DB";
const useSearch =()=>{
    const [search, setSearch]=React.useState('');
    const movie = DB.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()));
    
    const [openModal, setOpenModal] = React.useState(false);
    return {
        movie,
        search,
        setSearch,
        setOpenModal,
        openModal
    }
}
export {useSearch}