import React from 'react'
export const Carousel = () => (
        <div id="carouselExampleControls" className="carousel slide caorusel-index " data-bs-ride="carousel" tabIndex="1">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="assets/images/unidos.jpg" className="d-block w-100 image" alt="..."/>
                </div>
                <div className="carousel-item ">
                    <img src="assets/images/mulan.jpg" className="d-block w-100 image" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="assets/images/raya.jpg" className="d-block w-100 image" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
)


