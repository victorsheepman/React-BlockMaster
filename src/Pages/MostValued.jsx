import React,{useReducer, useEffect} from 'react';
import { Movie } from "../components/Movie";
import { MovieList } from "../containers/MovieList";
import movieReducer, { initialState } from '../reducers/reducer';

const MostValued = ()=> {
    const [state, dispatch]=useReducer(movieReducer, initialState);

    useEffect(()=>{
         dispatch({
            type:'SET_FILTER',
            payload: 'mostValued'
        })
    },[])
    const ids = state.list[state.filter];
    console.log(ids);
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