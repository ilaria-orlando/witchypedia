import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

import Crystal from "../images/svg/crystal.svg"
import Eye from "../images/svg/eye_small.svg"
import Moon from "../images/svg/moon_small.svg"

const AllCrystals = () => {

    return (
        <Layout>
            <div className="divStyle">
                <div className="crystalPage">
                    <div className="title">
                        <Crystal className="detailSVG"/>
                        <h2 className="titleH2">Crystals</h2>
                    </div>
                    <div className="description">
                        <p>So, you need a crystal or stone to enhance a spell? Or you want some support in an area in your life.
                        Here you can find all crystals documented on the site sorted by their associated properties. Click on a tag and
                            find out which crystal fits your purposes best. Every detail page holds info about the crystal, including most associated
                        zodiac sign and chakra. More tags are coming soon!</p>
                    </div>
                </div>
                <div className="tags">
                    <Link to={"/protection/"}><div className="tagLink"><Moon /><p>Protection</p> </div></Link>
                    <Link to={"/money/"}><div className="tagLink"><p>Money </p></div></Link>
                    <Link to={"/clarity/"}><div className="tagLink"><Eye /><p>Clarity</p> </div></Link>
                    <Link to={"/love/"}><div className="tagLink"><p>Love</p> </div></Link>
                </div>

            </div>
        </Layout>
    )


}

export default AllCrystals