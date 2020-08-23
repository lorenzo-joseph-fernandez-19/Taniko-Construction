
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.taniko.co.nz`,
},
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-170917636-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sass`,
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  `gatsby-plugin-advanced-sitemap`,
  {
    resolve: `gatsby-plugin-google-analytics-gdpr`,
    options: {
      // The property ID; the tracking code won't be generated without it.
      trackingId: "UA-170917636-1",
      // Optional parameter (default false) - Enable analytics in development mode.
      enableDevelopment: true, // default false
      // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
      anonymizeIP: true,
      // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
      autoStartWithCookiesEnabled: false, 
      // Optional parameter - Configuration for react-ga and google analytics 
      reactGaOptions: {
          debug: true,
          gaOptions: {
              sampleRate: 10
          }
      }
    },
  },
  {
    resolve: `gatsby-plugin-cookiehub-banner`,
    options: {
        // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
        cookieHubId: '2e1ea56b',
        // Optional parameter (default false) - Use new v2 API.
        cookieHubV2Api: true,
        // Categories configured with CookieHub
        categories: [
        { 
            categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
            cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled' // Your custom cookie name
        },
        { 
            categoryName: 'marketing',
            cookieName: 'marketing-enabled'
        }
        ]
    }
},
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `http://fqs.opr.mybluehost.me/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
  ],
}
