require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Witchypedia`,
    description: `Search and find all the info you need to create your spells. Take notes in your own virtual book of shadows`,
    author: `Ilaria & Stephanie`,
  },
  plugins: [

      {
          resolve: `gatsby-plugin-google-fonts-v2`,
          options: {
              fonts: [
                  {
                      family: 'Roboto Slab',
                      variable: true,
                      weights: ['200..900']
                  }
              ]
          }
      },

      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `images`,
              path: `${__dirname}/src/images`,
          },
      },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

      {
          resolve: `gatsby-source-contentful`,
          options: {
              spaceId: `16qq63sn1xyf`,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: `pLnC3_i6eRUM__hrii1428lLQVRJlyVOP3iB0tlqHXs`,
          },
      },

      `@chakra-ui/gatsby-plugin`,

    `gatsby-plugin-gatsby-cloud`,



    {
        resolve: "gatsby-plugin-react-svg",
        options: {
            rule: {
                include: /svg/
            }
        }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
