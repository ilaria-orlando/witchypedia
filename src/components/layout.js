import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/dosis"
import BackgroundImage from 'gatsby-background-image'

import Header from "./header"
import "./style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      desktop: file(relativePath: { eq: "star_pattern.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
    }
  `)




  return (
    <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div
            style={{
              margin: `0 auto`,
            }}
          >
            <main>{children}</main>
            <footer
              style={{
                marginTop: `2rem`,
              }}
            >
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
          </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
