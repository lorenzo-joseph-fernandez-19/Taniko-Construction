/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sass`,
  {
    resolve: `gatsby-source-wordpress`,
    options: {
        // Specify the URL of the WordPress source
        baseUrl: `fqs.opr.mybluehost.me`,
        protocol: `http`,
        // Indicates if a site is hosted on WordPress.com
        hostingWPCOM: false,
        // Specify which URL structures to fetch
        includedRoutes: [
          '**/posts',
        ]
      }
    }
  ],
}
