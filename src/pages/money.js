import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from "../components/layout"
import Background from "../components/background";

import Moneybag from "../images/svg/money_big.svg"
import Gem from "../images/svg/gem.svg";


const Money = ({ data: { allContentfulCrystals : data} }) => {

    return(
        <Background>
            <Layout>
                <div className="divStyle">
                    <div className="crystalsPage">
                        <div className="title">
                            <Moneybag className="detailSVG"/>
                            <h2 className="titleH2 purpleColor">Money</h2>
                        </div>
                        <div className="mainText green">
                            <p>Money cannot make you happy, but it does help. Do you want to attract some quick cash? Or need some support in making financial decisions?
                            Sometimes we just need a little help in finding a fulfilling job. This section covers all the crystals to jumpstart you financially. Click and find out!</p>
                        </div>
                    </div>
                    <div className="tags">
                        {data.edges.map(({ node }) => {
                            return (
                                <div key={node.slug}>
                                    <Link to={`/crystals/${node.slug}`}><button className="tagLink purple"><Gem /><p>{node.name}</p></button></Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </Background>

    )

}

export default Money

export const pageQuery = graphql`
    query{
       allContentfulCrystals (filter: {tags: {eq: "money"}}) {
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