import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet";


import "@fontsource/dosis"
import "@fontsource/shadows-into-light"
import "@fontsource/berkshire-swash"

import Header from "./header"
import "./layout.scss"

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ data.site.siteMetadata?.title }</title>
      </Helmet>
        <Header />
          <div
            style={{
              margin: `0 auto`,
            }}
          >
            <main>{children}</main>
          </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
