/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const crystals = await graphql(
        `
          {
            allContentfulCrystals {
              edges {
                node {
                  name
                  slug
                  tags
                }
              }
            }
          }
        `)
    crystals.data.allContentfulCrystals.edges.forEach(edge => {
        createPage({
            path: `/crystals/${edge.node.slug}`,
            component: path.resolve("./src/templates/crystal.js"),
            context: {
                slug: edge.node.slug,
            },
        })

    })




}