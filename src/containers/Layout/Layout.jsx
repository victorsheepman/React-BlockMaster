import React, {useContext} from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import {Header} from '../Header/Header';
import AppContext from '../../context/AppContext';
const Layout = ({children})=>{
    const{setPage, page} = useContext(AppContext);
    const url = location.pathname;
    return(
        <div className="Layout">
            <Header />
            <Carousel />
            {children}
            {url == '/search' ? '' : <button className='layout__button' onClick={()=>setPage(page + 1)}>mas</button>}
        </div>
    )
}
export {Layout};