import React from "react";

import { Movie } from "../components/Movie";
import { useSearch } from "../Hooks/useSearch";

const MovieList = ({children})=>{
  
    return(
        <div className="Main-container">
            <section className="MovieList">
                {children}
            </section>
        </div>

    )
}
export {MovieList}