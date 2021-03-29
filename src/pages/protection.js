import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from "../components/layout"


const Protection = ({ data: { allContentfulCrystals : data} }) => {

    return(
        <Layout>
            {data.edges.map(({ node }) => {
                return (
                    <li key={node.slug}>
                        <Link to={`/crystals/${node.slug}`}>{node.name}</Link>
                    </li>
                )
            })}
        </Layout>
    )

}

export default Protection

export const pageQuery = graphql`
    query{
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