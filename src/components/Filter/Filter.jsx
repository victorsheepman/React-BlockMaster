import React from "react";
import { NavLink } from "react-router-dom";

export const Filter =()=>(
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
