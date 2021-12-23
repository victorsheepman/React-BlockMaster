import { movieListAsMap, getAllIds, getLeastValuedIds,getMostValuedIds   } from "../utils/normalize";;
import DB from "../utils/DB";
import { useEffect, useState, useReducer } from "react";
import movieReducer from "../reducers/reducer";
import { useSearch } from "./useSearch";
const initialState = {
    movieList: movieListAsMap(DB),
    filter: 'all',
    list:{
        all: getAllIds(DB),
        mostValued: getMostValuedIds(DB),
        leastValued: getLeastValuedIds(DB),
    },
}


export const useinitialState =  ()=>{
    const [page, setPage]= useState(2);
    
    const [state, dispatch]=useReducer(movieReducer, initialState);
    const  {movie, search, setSearch} = useSearch(state)
    useEffect(async()=>{
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ffae6ceb377fb3d244739ecd9b2c1a1d&page=${page}`);
        const json = await res.json();
        dispatch({
            type:'ADD_MOVIES',
            payload: json.results
        })
    },[page])
    return {
        initialState,
        state,
        setPage, 
        dispatch,
        page,
        movie,
        search, 
        setSearch
    }
}