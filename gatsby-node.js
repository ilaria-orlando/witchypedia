// gatsby-node.js


const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

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