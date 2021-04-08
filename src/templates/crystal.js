import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"


const Crystal = (props) => {

    const image = getImage(props.data.crystal.image)
    const text = props.data.crystal.childContentfulCrystalsDescriptiveTextTextNode.descriptiveText

    return(
        <Layout>
            <div className="divStyle">
                <div className="crystalsummery">
                    <GatsbyImage className="rounded"
                                 image={image} alt={props.data.crystal.name}
                    />
                    <div className="description">
                        <h2>{props.data.crystal.name}</h2>
                        <p>{text}</p>
                        <p>Associated chakra: {props.data.crystal.chakra}</p>
                        <p>Associated zodiac: {props.data.crystal.zodiac}</p>
                    </div>
                </div>
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
    childContentfulCrystalsDescriptiveTextTextNode {
      descriptiveText
    }
    image {
      gatsbyImageData(
        resizingBehavior: SCALE
        width: 550
        placeholder: BLURRED
        formats: JPG)
    }
  }
    
    }
`

