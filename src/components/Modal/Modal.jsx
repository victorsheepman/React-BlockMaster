// @flow 
import React from 'react';
import ReactDOM from 'react-dom';

export const Modal = (props) => {
    const closeModal =(event)=>{
        props.setState(false);
        event.stopPropagation();
    }
    return ReactDOM.createPortal (
        <div className='modal'>
            <div className='modal__container'>
                <article className='modal__info'>
                    <h1 className='modal__title'>{props.title}</h1>
                    <span className='modal__overview'>{props.overview}</span>
                    <div className='modal__date'></div>
                    <div className='modal__wrapperButton'>
                        <button className='modal__button'>VER AHORA</button>
                        <button className='modal__button--black'>
                            VER DESPUÉS
                        </button>
                    </div>
                </article>
                <article className='modal__card'>
                    <img src={`//image.tmdb.org/t/p/w220_and_h330_face${props.poster_path}`} alt="" />
                    <span className={(props.vote_average >=7 && 'recommended') || 'normal'}>
                        {props.vote_average}
                        <img src="assets/icons/Property 1=star.svg" alt="" />
                    </span>
                </article>
                <figure className='modal__exit' onClick={closeModal}>
                    <img src="assets/icons/Property 1=delete.svg" alt="" />
                </figure>
                
            </div>            
        </div>,
   
        document.getElementById('modal')  
    );
};