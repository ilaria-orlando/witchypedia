import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Background from "../components/background";

import Crystal from "../images/svg/crystal.svg"
import Eye from "../images/svg/eye_small.svg"
import Moon from "../images/svg/moon_small.svg"
import Heart from "../images/svg/heart_small.svg"
import Gem from "../images/svg/gem.svg"
import Money from  "../images/svg/money_small.svg"

const AllCrystals = () => {

    return (
        <Background>
            <Layout>
                <div className="divStyle">
                    <div className="crystalsPage">
                        <div className="title">
                            <Crystal className="detailSVG"/>
                            <h2 className="titleH2">Crystals</h2>
                        </div>
                        <div className="mainText">
                            <p>So, you need a crystal or stone to enhance a spell? Or you want some support in an area in your life.
                            Here you can find all crystals documented on the site sorted by their associated properties. Click on a tag and
                                find out which crystal fits your purposes best. Every detail page holds info about the crystal, including most associated
                            zodiac sign and chakra. More tags are coming soon!</p>
                        </div>
                    </div>
                    <div className="tags">
                        <Link to={"/protection/"}><button className="tagLink"><Moon /><p>Protection</p> </button></Link>
                        <Link to={"/money/"}><button className="tagLink"><Money /><p>Money </p></button></Link>
                        <Link to={"/clarity/"}><button className="tagLink"><Eye /><p>Clarity</p> </button></Link>
                        <Link to={"/love/"}><button className="tagLink"> <Heart /><p>Love</p> </button></Link>
                        <Link to={"/"}><button className="tagLink"><Gem /><p>All</p> </button></Link>
                    </div>

                </div>
            </Layout>
        </Background>
    )


}

export default AllCrystals