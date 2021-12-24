import React, { useRef } from 'react'
import { Rerousel } from 'rerousel';
import 'bootstrap/dist/css/bootstrap.min.css'


export const Carousel = () => {
    const customerLogo = useRef(null);
    const images = [
        {
            image:'mulan.jpg'
        },
        {
            image: 'raya.jpg'
        },
        {
            image: 'unidos.jpg'
        } 
    ];
    return (
        <div className='Wrapper'>
            <div className='caorusel'>
                <Rerousel itemRef={customerLogo}>
                    <figure ref={customerLogo}>
                        <img src="assets/images/mulan.jpg" key={1} alt="" />
                    </figure>
                    <figure>
                        <img src="assets/images/raya.jpg" key={1} alt="" />
                    </figure>
                    <figure>
                        <img src="assets/images/unidos.jpg" key={1} alt="" />
                    </figure>
                </Rerousel>
            </div>
        </div>
        
    )
}

