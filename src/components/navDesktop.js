import * as React from "react";
import {Link} from "gatsby";

import Logo from "../images/svg/witchypedia_logo_green.svg"
import Right from "../images/svg/line_right.svg"
import Left from "../images/svg/line_left.svg"


const NavDesktop = () => {

    return(
        <div className="menuFlex">
            <div>
                <Link to="/">
                    <Logo className="centerImage" />
                </Link>
            </div>
            <nav  className="flexLines">
                <Right />
                <Link to={"/"}><span className="menuItem">About</span></Link>
                <Link to={"/crystals"}><span className="menuItem">Crystals</span></Link>
                <Link to={"/"}><span className="menuItem">Herbs</span></Link>
                <Link to={"/AllNotes"}><span className="menuItem">Grimoire</span></Link>
                <Left />
            </nav>
        </div>
    )
}

export default NavDesktop