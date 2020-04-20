require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  siteMetadata: {
    title: "Ariena Scout",
    description: "explore awesome places and meet kids. Say yes to adventures",
    author: "@Abderrahmenlh",
    twitterUsername: "@AbderrahmenLah1",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://back-roads.netlify.com"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ariena Scout`,
        short_name: `Ariena Scout`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://back-roads.netlify.com",
        sitemap: "https://back-roads.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`
  ]
};
