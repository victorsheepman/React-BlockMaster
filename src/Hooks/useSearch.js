import React from "react";
import DB from "../utils/DB";

function filterByTitle(title, movies) {
    const list = []
    movies.forEach((movie) => {
      if (movie.title.toLowerCase().includes(title.toLowerCase())) {
        list.push(movie)
      }
    })
    return list
}

function findById(id, allIds) {
    const parseId = parseInt(id, 10)
    if (allIds.includes(parseId)) {
      return [parseId]
    }
    return allIds
}
function searchMovie(query, list, allIds) {
    if (isNaN(query)) {
      return filterByTitle(query, list)
    }
    return findById(query, allIds)
}


export const useSearch =(state)=>{
    const [search, setSearch]=React.useState('');
    //const movie = state.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()));
    const movie = searchMovie(search,state.movieList, state.list.all)
    const [openModal, setOpenModal] = React.useState(false);
    return {
        movie,
        search,
        setSearch,
        setOpenModal,
        openModal
    }
}
