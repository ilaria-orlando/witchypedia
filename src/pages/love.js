import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from "../components/layout"


const Love = ({ data: { allContentfulCrystals : data} }) => {

    return(
        <Layout>
            <div className="divStyle">
                {data.edges.map(({ node }) => {
                    return (
                        <li key={node.slug}>
                            <Link to={`/crystals/${node.slug}`}>{node.name}</Link>
                        </li>
                    )
                })}
            </div>
        </Layout>
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