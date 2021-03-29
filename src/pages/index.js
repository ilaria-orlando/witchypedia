import * as React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql} from "gatsby";



const IndexPage = ({ data }) => (

  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to={"/protection/"}>Protection</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
    query($slug: String!){
        
     crystal: contentfulCrystals(slug: {eq: $slug}) {
    name
    
    chakra
    zodiac
  }
    
    }
`

