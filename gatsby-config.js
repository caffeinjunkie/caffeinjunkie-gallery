/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config();

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `caffeinjunkie`,
    siteUrl: `https://www.caffeinjunkie.gatsbyjs.io`,
    description: `Get your daily intake!`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Caffeinjunkie Gallery',
        short_name: 'Caffeinjunkie',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
  ],
}
