/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    /*const pagesByTags = await graphql(
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
        `
    )
    pagesByTags.data.allContentfulCrystals.edges.forEach(edge => {
        createPage({
            path: `/${edge.node.tags}`,
            component: path.resolve("./src/templates/tagfilter.js"),
            context: {
                tags: edge.node.tags,
            }
        })
    })*/

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