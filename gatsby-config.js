module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "LA FM Radio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-drupal",
      options: {
        baseUrl: "https://live-contentacms.pantheonsite.io/",
        apiBase: "api/recipes",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-prettier-build`,
      options: {
        // default values
        types: ['html'],
        concurrency: 20,
        verbose: true
      }
    },
  ],
};
