import React from "react";
import { Filter } from "./Filter";
import { Search } from "./Search";

const Header = ()=>{
    return (
        <header className="Header">
            <figure className="Header__img">
                <img src="assets/images/logo-blockBuster.png" alt="" />
            </figure>
            <Filter />
            <Search />
        </header>
    );
}
export {Header}