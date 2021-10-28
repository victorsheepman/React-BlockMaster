import React from "react";
import { NavLink } from "react-router-dom";
import { useMovie } from "../context/AppContext";


const Filter =()=>{
    return(
            <ul className="Filter" >
                <li>
                    <NavLink className='inactive' to='/home'>Todas</NavLink>    
                </li>
                <li >
                   <NavLink className='inactive'  to='/most'>Más valoradas</NavLink> 

                </li>
                <li >
                    <NavLink className='inactive'  to="/least">Menos valoradas</NavLink>
                </li>
            </ul>
    )
}
export {Filter}