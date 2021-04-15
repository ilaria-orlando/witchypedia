import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"


import Logo from "../images/svg/witchypedia_logo_green.svg"
import Right from "../images/svg/line_right.svg"
import Left from "../images/svg/line_left.svg"

const MenuIcon = styled.button `
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border:  none;
    cursor: pointer;
    z-index: 5;
    
    div {
        width: 1.5rem;
        height: .2rem;
        background: #a0d6b4;
        border-radius: 5px;
        transform-origin: 1px;
    }
`


const Header = ({ siteTitle }) => (
  <header>
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
        <MenuIcon>
            <div />
            <div />
            <div />
        </MenuIcon>
        <div>

        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
