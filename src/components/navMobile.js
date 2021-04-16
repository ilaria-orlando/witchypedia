import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { slide as Menu } from 'react-burger-menu'

import Logo from "../images/svg/witchypedia_logo_green.svg"


const NavMobile = () => {

    const [menuState, setMenuOpen] = useState({menuOpen: false});

    const closeMenu = () => {
        setMenuOpen({menuOpen: false})
    }


    return (
        <div className="mobileMenu">
            <Menu right width={ '100%' } isOpen={ menuState.menuOpen }>
                    <Link to={"/"} onClick={() => closeMenu() }><span className="menu-item">About</span></Link>
                    <Link to={"/crystals"} onClick={() => closeMenu() }><span className="menu-item">Crystals</span></Link>
                    <Link to={"/"} onClick={() => closeMenu() }><span className="menu-item">Herbs</span></Link>
                    <Link to={"/AllNotes"} onClick={() => closeMenu() }><span className="menu-item">Grimoire</span></Link>
            </Menu>
            <div className="mobileLogo">
                <Link to="/"><Logo /></Link>
            </div>
        </div>
    )

 }

export default NavMobile