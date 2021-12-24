// @flow 
import  React, { useContext } from 'react';


export const Error = () => (
        <div className='container-error'>
            <figure className='error-image'>
                <img src="assets/images/error.png" alt="" />
            </figure>
            <h3>No se encontraron resultados </h3>
        </div>
    );