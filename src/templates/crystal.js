import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const Crystal = (props) => {

    return(
        <Layout>
            <div>
                <h1>{props.data.crystal.name}</h1>
                <p>{props.data.crystal.chakra}</p>
                <p>{props.data.crystal.zodiac}</p>
            </div>
        </Layout>
    )
}

export default Crystal

export const pageQuery = graphql`
    query($slug: String!){
     crystal: contentfulCrystals(slug: {eq: $slug}) {
    name
    chakra
    zodiac
  }
    
    }
`

