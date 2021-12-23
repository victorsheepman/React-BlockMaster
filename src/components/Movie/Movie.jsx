import React, { useState } from 'react';
import { Modal } from "../Modal/Modal";
const Movie = (props)=> {
    const [modal, setModal] = useState(false);
    const handleClick =()=>{
        setModal(true);
        console.log(modal);
        
    }
    return (
        <div className='Movie-card' onClick={handleClick}>
            <img src={`//image.tmdb.org/t/p/w220_and_h330_face${props.poster_path}`} alt="" />
            <span className={(props.vote_average >=7 && 'recommended') || 'normal'}>
                {props.vote_average}
                <img src="assets/icons/Property 1=star.svg" alt="" />
            </span>
            {modal && <Modal {...props} setState={setModal} modal={modal}/>}
        </div>
    );
}

export {Movie};