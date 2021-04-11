import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

const Background = ({children}) => {

    const image = useStaticQuery(
        graphql`
      query {
        desktop: file(relativePath: { eq: "star_pattern.png" }) {
          childImageSharp {
            fixed (width: 646){
                src
            }
          }
        }
      }
    `)

    const imageData = image.desktop.childImageSharp.fixed

    return (
        <BackgroundImage fluid={imageData} className="background">
            {children}
        </BackgroundImage>
    )
}

Background.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Background