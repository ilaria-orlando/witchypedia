import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from "../components/layout"
import Background from "../components/background";

import Gem from "../images/svg/gem.svg"
import Heart from "../images/svg/heart_large.svg";


const Love = ({ data: { allContentfulCrystals : data} }) => {

    return(
        <Background>
            <Layout>
                <div className="divStyle">
                    <div className="crystalPage">
                        <div className="title">
                            <Heart className="detailSVG"/>
                            <h2 className="titleH2 purpleColor">Love</h2>
                        </div>
                        <div className="description green">
                            <p>Attracting love, loving your self better, improving love in the household... These are all things that can be supported by the crystals in this category.
                                Any help you need regarding love, friendship and improving your relationships can be found here. Take a look!</p>
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

export default Love

export const pageQuery = graphql`
    query{
       allContentfulCrystals (filter: {tags: {eq: "love"}}) {
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