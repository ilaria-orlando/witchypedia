import React from 'react'
import { graphql, navigate } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Background from "../components/background";

import Gem from "../images/svg/gem.svg";


const Crystal = ({ data: { contentfulCrystals : data} }) => {

    const image = getImage(data.image)
    const text = data.childContentfulCrystalsDescriptiveTextTextNode.descriptiveText

    return(
        <Background>
            <Layout>
                <div className="divStyle">
                    <button onClick={() => { navigate(-1) }} className="tagLink backButton"><Gem /> <span>Go back</span></button>
                    <div className="crystalSummery">
                        <h2 className="name">{data.name}</h2>
                        <GatsbyImage className="rounded"
                                     image={image} alt={data.name}
                        />
                        <div className="mainText">
                            <h3>What about {data.name}</h3>
                            <p>{text}</p>
                            <br />
                            <h3>How to care for {data.name}</h3>
                            <p>Fusce nibh libero, congue eget molestie eu, convallis at quam. Nam mauris lacus, efficitur et lectus quis, venenatis dictum risus.
                                Integer nec laoreet quam. Aenean ac felis quis risus fringilla condimentum et a turpis. Cras vitae urna a turpis aliquam semper.
                                Morbi sed nisl tincidunt, mattis sapien id, luctus felis. Cras posuere sapien et eros elementum, sed egestas dui condimentum.</p>
                            <p>Associated chakra:<span className="bold">{data.chakra}</span></p>
                            <p>Associated zodiac: <span className="bold">{data.zodiac}</span></p>
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
     contentfulCrystals(slug: {eq: $slug}) {
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

