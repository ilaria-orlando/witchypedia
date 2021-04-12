import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from "../components/layout"
import Background from "../components/background";

import Moon from "../images/svg/moon_big.svg"
import Gem from "../images/svg/gem.svg";


const Protection = ({ data: { allContentfulCrystals : data} }) => {

    return(
        <Background>
            <Layout>
                <div className="divStyle">
                    <div className="crystalPage">
                        <div className="title">
                            <Moon className="detailSVG"/>
                            <h2 className="titleH2 purpleColor">Protection</h2>
                        </div>
                        <div className="description green">
                            <p>Sometimes you need to protect yourself from the low vibration energy of others. You might find yourself in a hostile environment or you
                            expect yourself to be in a risky situation that can't be avoided. It's important to protect your own flame, some people are just out to get you.
                            This is our collection of crystals for protection.git</p>
                        </div>
                    </div>
                    <div className="tags">
                        {data.edges.map(({ node }) => {
                            return (
                                <div key={node.slug}>
                                    <Link to={`/crystals/${node.slug}`}><div className="tagLink purple"><Gem /><p>{node.name}</p></div></Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </Background>

    )

}

export default Protection

export const pageQuery = graphql`
    query {
       allContentfulCrystals (filter: {tags: {eq: "protection"}}) {
        edges {
            node {
                chakra
                zodiac
                name
                slug
        
            }
        }
        }
    
    }
`