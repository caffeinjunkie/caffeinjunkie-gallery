/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config();

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`photo`],
        // token: process.env.STRAPI_ACCESS_TOKEN,
        // loginData: {
        //   identifier: "strapi.adm.test@gmail.com",
        //   password: "strpAdm1",
        // },
      }
    }
  ],
}
