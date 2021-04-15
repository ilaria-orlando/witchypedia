import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from "../components/layout"
import Background from "../components/background";

import Eye from "../images/svg/eye_big.svg"
import Gem from "../images/svg/gem.svg"

const Clarity = ({ data: { allContentfulCrystals : data} }) => {

    return(
        <Background>
            <Layout>
                <div className="divStyle">
                    <div className="crystalsPage">
                        <div className="title">
                            <Eye className="detailSVG"/>
                            <h2 className="titleH2 purpleColor">Clarity</h2>
                        </div>
                        <div className="mainText green">
                            <p>Do you need some help trusting your intuition?
                                Are you looking for a crystal that stimulates you cognitively? Do you need some help making decisions? Or maybe you want something
                                that will help you concentration. Here you can find all the crystals and stones associated with clarity. </p>
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

export default Clarity

export const pageQuery = graphql`
    query{
       allContentfulCrystals (filter: {tags: {eq: "clarity"}}) {
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