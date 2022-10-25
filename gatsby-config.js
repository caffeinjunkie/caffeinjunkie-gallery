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
    author: `@caffein.junkie`,
    description: `Get your daily intake!`,
    image: `src/assets/images/logo.png`,
    keywords: `photography, travel photography, street photography, caffeinjunkie, caffein.junkie, caffein junkie, Satrio Adi Prakoso`,
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
        token: process.env.SANITY_READ_TOKENs,
        graphqlTag: 'default',
        overlayDrafts: true,
        watchMode: true
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
  ],
}
