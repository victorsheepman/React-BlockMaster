import React from 'react'
import { NavLink } from 'react-router-dom'
export const Nav = ({setShow}) => (
        <div className='nav'>
            <nav className='nav__wrapper' >
                <figure className='nav__exit' onClick={()=>setShow(false)}>
                    <img src="assets/icons/Property 1=delete.svg" alt="" /> 
                </figure>
                <ul className="nav__menu" >
                    <li>
                        <NavLink className='inactive' to='/home'  onClick={()=>setShow(false)}>Todas</NavLink>    
                    </li>
                    <li >
                    <NavLink className='inactive'  to='/most' onClick={()=>setShow(false)}>Más valoradas</NavLink> 

                    </li>
                    <li >
                        <NavLink className='inactive'  to="/least" onClick={()=>setShow(false)}>Menos valoradas</NavLink>
                    </li>
                </ul> 
            </nav>
        </div>
)

