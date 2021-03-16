module.exports = {
  siteMetadata: {
    title: `Martin Guzman`,
    author: {
      name: `Martin Guzman`,
      summary: `who lives and works in Vancouver, BC helping networks stay secure.`,
    },
    description: `A blog about cybersecurity, and OSInt.`,
    siteUrl: `https://www.martin-guzman.com/`,
    social: {
      linkedin: `martin-guzman-ca`,
    },
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Articles',
        slug: '/articles',
      },
      {  
        name: 'About',
        slug: '/about',
      },
      {  
        name: 'Contact',
        slug: '/contact',
      },
    ],
    externalLinks: [
      {
        name: 'LinkedIn',
        url: `https://www.linkedin.com/in/martin-guzman-ca`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martin Guzman`,
        short_name: `Martin`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4337C8`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
