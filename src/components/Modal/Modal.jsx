// @flow 
import React from 'react';
export const Modal = (props) => {
    const closeModal =(event)=>{
        props.setState(false);
        event.stopPropagation();
    }
    return(
        <div className='modalMovie'>
            <div className='modalMovie__container'>
                <article className='modalMovie__info'>
                    <h1 className='modalMovie__title'>{props.title}</h1>
                    <span className='modalMovie__overview'>{props.overview}</span>
                    <div className='modalMovie__date'></div>
                    <div className='modalMovie__wrapperButton'>
                        <button className='modalMovie__button'>VER AHORA</button>
                        <button className='modalMovie__button--black'>
                            VER DESPUÉS
                        </button>
                    </div>
                </article>
                <article className='modalMovie__card'>
                    <img src={`//image.tmdb.org/t/p/w220_and_h330_face${props.poster_path}`} alt="" />
                    <span className={(props.vote_average >=7 && 'recommended') || 'normal'}>
                        {props.vote_average}
                        <img src="assets/icons/Property 1=star.svg" alt="" />
                    </span>
                </article>
                <figure className='modalMovie__exit' onClick={closeModal}>
                    <img src="assets/icons/Property 1=delete.svg" alt="" />
                </figure>
            </div>            
        </div>
    );
};