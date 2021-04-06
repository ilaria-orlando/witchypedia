import * as React from "react"
import { graphql, useStaticQuery} from "gatsby";
import { getImage } from 'gatsby-plugin-image';
import { BgImage, convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components"


const LandingWelcome = () => {

    const data = useStaticQuery(
        graphql`
      query {
        placeholderImage: file(relativePath: { eq: "potion_bottle_v2.png" }) {
          childImageSharp {
             fluid(maxWidth: 1826, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
    );

    const imageData = data.placeholderImage.childImageSharp.fluid

    return(

            <BackgroundImage
                className="landing"
                Tag="section"
                fluid={imageData}
            >
                <div className="divStyle">
                    <h2>Wicthypedia test test test</h2>
                </div>
            </BackgroundImage>

    )

}

const StyledLandingWelcome = styled(LandingWelcome)`
  background-position: right bottom;
  background-repeat: no-repeat;
  margin: 0;
`

export default StyledLandingWelcome