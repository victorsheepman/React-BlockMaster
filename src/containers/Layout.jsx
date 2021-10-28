import React from "react";
import { Carousel } from "../components/Carousel";
import {Header} from '../components/Header';

const Layout = ({children})=>{
    return(
        <div className="Layout">
            <Header />
            <Carousel />
            {children}
        </div>
    )
}
export {Layout};