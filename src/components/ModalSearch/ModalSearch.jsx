import React, {useContext} from 'react'
import AppContext from '../../context/AppContext';
import { Movie } from '../Movie/Movie';
import { MovieList } from '../../containers/MovieList/MovieList';
import {Error} from '../Error/Error'
export const ModalSearch = ({setModal}) => {
    const { setSearch, movie} = useContext(AppContext);
    let movieSearch = '';
    const onSearchValueChange = (event) => {
        movieSearch = event.target.value;
    }

    //buscar pelicula
    const handleSubmit = (event)=>{
        event.preventDefault();
        setSearch(movieSearch)
    }
    return (
        <div className='modalsearch'>
            <div className='modalsearch__header'>
                <figure className='modalsearch__img' onClick={()=>setModal(false)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929L10.4142 12L15.7071 6.70711Z" fill="#FED941"/>
                    </svg>

                </figure>
                <form className="Search" onSubmit={handleSubmit}>
                    <input onChange={onSearchValueChange} />
                    <button type="submit">
                        <img src="assets/icons/Property 1=search.svg" alt="" />
                    </button>
                </form>
            </div>
           {
               movie.length !==0 ?
                
                <MovieList>
                    {movie.map((movie)=>(
                        <Movie  key={movie.id} {...movie}/>
                    ))}
                </MovieList>
                
                :
              
                <Error />
           }
        </div>
    )
}
