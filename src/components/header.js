import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from "../images/svg/witchypedia_logo_green.svg"
import Right from "../images/svg/line_right.svg"
import Left from "../images/svg/line_left.svg"


const Header = ({ siteTitle }) => (
  <header>
    <div className="menuFlex">
        <div>
            <Link to="/">
                <Logo className="centerImage" />
            </Link>
        </div>
        <div  className="flexLines">
            <Right />
            <Link to={"/"}><span className="menuItem">About</span></Link>
            <Link to={"/"}><span className="menuItem">Crystals</span></Link>
            <Link to={"/"}><span className="menuItem">Herbs</span></Link>
            <Left />
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
