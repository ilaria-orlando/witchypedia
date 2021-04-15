import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Background from "../components/background";


const Crystal = (props) => {

    const image = getImage(props.data.crystal.image)
    const text = props.data.crystal.childContentfulCrystalsDescriptiveTextTextNode.descriptiveText

    return(
        <Background>
            <Layout>
                <div className="divStyle">
                    <div className="crystalSummery">
                        <h2 className="name">{props.data.crystal.name}</h2>
                        <GatsbyImage className="rounded"
                                     image={image} alt={props.data.crystal.name}
                        />
                        <div className="mainText">
                            <p>{text}</p>
                            <p>Associated chakra:<span className="bold">{props.data.crystal.chakra}</span></p>
                            <p>Associated zodiac: <span className="bold">{props.data.crystal.zodiac}</span></p>
                        </div>
                    </div>
                </div>
            </Layout>
        </Background>
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

