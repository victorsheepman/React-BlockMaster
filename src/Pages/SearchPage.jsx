// @flow 
import  React, { useContext } from 'react';
import { Movie } from '../components/Movie';
import { MovieList } from '../containers/MovieList';
import { Error } from '../components/Error';
import AppContext from '../context/AppContext';
import DB from '../utils/DB';

export const SearchPage = () => {
    const {movie}=useContext(AppContext);
    if(movie.length !==0){
        return(
            <MovieList>
                {movie.map((movie)=>(
                    <Movie  key={movie.id} {...movie}/>
                ))}
            </MovieList>
        )
    }

        return(
            <Error />
        )
    
};