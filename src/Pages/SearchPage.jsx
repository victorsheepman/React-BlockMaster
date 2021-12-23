
import  React, { useContext } from 'react';
import { Movie } from '../components/Movie/Movie';
import { MovieList } from '../containers/MovieList/MovieList';
import { Error } from '../components/Error/Error';
import AppContext from '../context/AppContext';
import { useSearch } from '../Hooks/useSearch';
export const SearchPage = () => {
    const {movie}=useContext(AppContext);
    console.log(movie);
    if(movie.length > 0 && movie.length == 1){
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