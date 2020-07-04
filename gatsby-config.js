
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.taniko.co.nz`,
},
  plugins: [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sass`,
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  `gatsby-plugin-advanced-sitemap`,
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
    resolve: `gatsby-source-wordpress`,
    options: {
        // Specify the URL of the WordPress source
        baseUrl: `fqs.opr.mybluehost.me`,
        protocol: `http`,
        // Indicates if a site is hosted on WordPress.com
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: false,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://www.using-wordpress-with-gatsby.iamtimsmith.com",
        //   replacementUrl: "https://localhost:8000",
        // },
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: [],
        normalizer: function ({ entities }) {
          return entities
        }
      }
    },
  ],
}
