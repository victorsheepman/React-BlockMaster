import React,{useEffect, useContext} from 'react';
import { Movie } from "../components/Movie/Movie";
import { MovieList } from "../containers/MovieList/MovieList";
import AppContext from '../context/AppContext';
const MostValued = ()=> {
    const {state,dispatch} = useContext(AppContext);
    useEffect(()=>{
         dispatch({
            type:'SET_FILTER',
            payload: 'mostValued'
        })
    },[])
    const ids = state.list[state.filter];
    const movieList = state.movieList;
    return (
        <MovieList>
        {ids.map((movie)=>(
            <Movie key={movie.id} {...movieList.get(movie)}/>
        ))}
        </MovieList>
    );
}

export{MostValued};