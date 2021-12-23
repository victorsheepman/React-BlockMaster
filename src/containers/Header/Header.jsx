import React, { useState } from "react";
import { Filter } from "../../components/Filter/Filter";
import { Search } from "../../components/Search/Search";
import { useHistory } from "react-router-dom";
import { Nav } from "../../components/Nav/Nav";
import { ModalSearch } from "../../components/ModalSearch/ModalSearch";
const Header = ()=>{
    const history = useHistory();
    const handleSearch = ()=>{
        history.push('/search')
    }
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(false);
    return (
        <>
        <header className="Header">
            <figure className="Header__img">
                <img src="assets/images/logo-blockBuster.png" alt="" />
            </figure>
            {
                window.screen.width < 790 
                ? 
                <div>
                    <figure className="Header__icon" onClick={()=>setModal(true)}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66667 12C2.66667 6.86116 6.86114 2.66669 12 2.66669C17.1389 2.66669 21.3333 6.86116 21.3333 12C21.3333 14.3307 20.464 16.46 19.0417 18.099L19.6094 18.6667H21.3333L29.3333 26.6667L26.6667 29.3334L18.6667 21.3334V19.6094L18.099 19.0417C16.46 20.4641 14.3307 21.3334 12 21.3334C6.86114 21.3334 2.66667 17.1389 2.66667 12ZM18.6667 12C18.6667 8.30233 15.6977 5.33335 12 5.33335C8.30231 5.33335 5.33334 8.30233 5.33334 12C5.33334 15.6977 8.30231 18.6667 12 18.6667C15.6977 18.6667 18.6667 15.6977 18.6667 12Z" fill="#FED941"/>
                        </svg>
                    </figure>
                    <figure className="Header__icon" onClick={()=>setShow(true)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H3ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3ZM2 18C2 17.4477 2.44772 17 3 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z" fill="#FED941"/>
                        </svg>
                        
                    </figure> 
                </div> 
                : 
                <>
                    <Filter />
                    <Search />
                </>
            }
            
        </header>
            {
                show && <Nav setShow={setShow} />
            }
            {
                modal && <ModalSearch setModal={setModal} />
            }
        </>
    );
}
export {Header}