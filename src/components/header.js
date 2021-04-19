import * as React from "react"
import PropTypes from "prop-types"

import NavDesktop from "./navDesktop";
import NavMobile from "./navMobile";



const Header = ({ siteTitle }) => {
    
   let windowWidth

    if (typeof window !== `undefined`) {
        windowWidth = window.innerWidth
    }
    
    const [width, setWidth] = React.useState(windowWidth);
    const breakpoint = 700;


    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
            }, []);

        const navigation = width < breakpoint ? <NavMobile /> : <NavDesktop />;


        return(
                <header>
                    { navigation }
                </header>
            )
};




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
