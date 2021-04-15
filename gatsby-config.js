require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Witchypedia`,
        description: `Your go-to platform for spiritual healing.`,
        author: `Ilaria and Steph`,
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
                spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            // The name of the plugin
            resolve: 'gatsby-source-mongodb',
            options: {
                // Name of the database and collection where are books reside
                dbName: process.env.GATSBY_ATLAS_DB_NAME,
                collection: process.env.GATSBY_ATLAS_COLLECTION,
                server: {
                    address: process.env.GATSBY_ATLAS_ADDRESS,
                    port: process.env.GATSBY_ATLAS_PORT
                },
                auth: {
                    user: process.env.GATSBY_ATLAS_USER,
                    password: process.env.GATSBY_ATLAS_PASSWORD
                },
                extraParams: {
                    replicaSet: 'Cluster0-shard-0',
                    ssl: true,
                    authSource: 'admin',
                    retryWrites: true
                }
            }
        },
        `@chakra-ui/gatsby-plugin`,
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-sass`,
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
