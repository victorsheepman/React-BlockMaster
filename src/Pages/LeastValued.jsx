import React, { useEffect, useReducer } from 'react';
import { Movie } from "../components/Movie/Movie";
import { MovieList } from "../containers/MovieList/MovieList";
import movieReducer from '../reducers/reducer';
import { useinitialState } from '../Hooks/InitialState'
const LeastValued = () =>{
    const {initialState} = useinitialState();
    const [state, dispatch]=useReducer(movieReducer, initialState);

    useEffect(()=>{
         dispatch({
            type:'SET_FILTER',
            payload: 'leastValued'
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

export {LeastValued};