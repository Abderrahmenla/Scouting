require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Ariena Scout",
    description: "explore awesome places and meet kids. Say yes to adventures",
    author: "@Abderrahmenlh",
    twitterUsername: "@AbderrahmenLah1",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://ariena-scouting.netlify.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ariena Scout`,
        short_name: `Ariena Scout`,
        start_url: `/`,
        background_color: `#55c57a`,
        theme_color: `#55c57a`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ariena-scouting.netlify.com",
        sitemap: "https://ariena-scouting.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/troupes/`, `/contact/`, `/troupes/*`],
      },
    },
  ],
}
