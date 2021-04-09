import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery} from "gatsby"

import BackgroundImage from "gatsby-background-image"
import Sparkle from 'react-sparkle'



const IndexPage = () => {
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
          <Layout>
            <SEO title="Home" />
            <div className="divStyle" style={{ position: 'relative', height:'80vh'}}>
                <Sparkle
                    minSize={3}
                    maxSize={5}
                    count={50}
                    fadeOutSpeed={1}
                    flickerSpeed={'slowest'}
                />
                <h2>Landing page</h2>
            </div>
          </Layout>
      </BackgroundImage>
      )

}


export default IndexPage


