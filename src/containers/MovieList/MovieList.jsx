import React from "react";
const MovieList = ({children})=>(
        <div className="Main-container">
            <section className="MovieList">
                {children}
            </section>
        </div>

    )
export {MovieList}