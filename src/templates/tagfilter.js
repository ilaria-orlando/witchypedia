import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"



const TagFilter = ({ data: { allContentfulCrystals : data} }) => {

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

export default TagFilter

export const pageQuery = graphql`
    query($tags: String!){
       allContentfulCrystals (filter: {tags: {eq: $tags}}) {
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