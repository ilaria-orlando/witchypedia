import * as React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, useStaticQuery} from "gatsby";
import StyledLandingWelcome from "../components/landingWelcome";



const IndexPage = () => {
  /*const data = useStaticQuery(
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

    const imageData = data.placeholderImage.childImageSharp.fluid*/

  return(
          <Layout>
            <SEO title="Home" />
            <StyledLandingWelcome />
            <Link to={"/protection/"}>Protection</Link>
          </Layout>
      )

}


export default IndexPage


