module.exports = {
  siteMetadata: {
    title: `VW Breakpoint Calcuator`,
    author: `Joe Alden`,
    description: `A tool that calculates the vw value of an CSS rule for a given breakpoint`,
    siteUrl: "https://vw.joealden.com"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VW Breakpoint Calcuator`,
        short_name: `VW Breakpoint Calcuator`,
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000"
      }
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`
  ]
};
