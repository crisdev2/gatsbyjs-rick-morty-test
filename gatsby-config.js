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
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Drupal",
        fieldName: "drupal",
        url: "http://www.gastby-la-basica.rcnra-dev.com/graphql",
        headers: {
          "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjllNjg4ODkyZmZhZDJmNGI3MGY5MWY3YWZlZTc5Y2FjMzgxMWRmZDU4NTAwZjA0MDM3YjEzYzhjNWFmYTYwNzhlMzcyNjFlMzNiYWQ2ZmUxIn0.eyJhdWQiOiJkZDkyYmM3My1mZmU4LTQ4NTMtYWExNy0wZTVhMDg2M2FkOTciLCJqdGkiOiI5ZTY4ODg5MmZmYWQyZjRiNzBmOTFmN2FmZWU3OWNhYzM4MTFkZmQ1ODUwMGYwNDAzN2IxM2M4YzVhZmE2MDc4ZTM3MjYxZTMzYmFkNmZlMSIsImlhdCI6MTYzNTk1NzMwMywibmJmIjoxNjM1OTU3MzAzLCJleHAiOjE2OTgxNjUzMDMsInN1YiI6IjEiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCIsImVkaXRvciJdfQ.i7gsIzMoDv-2zBYKh4iFdxQaFeEGf5kQm9w2S8TVL9-ufbCMW1r5IYzw68gQ43XUlRXZOh7ywNLQEMIHEh80N92QkFNTYC4izBi68uVTdm_bbjyf2HBVy8Osuzfmx-gaopb20DoLRGn2l8eR7DehHjfUL83Hmri575p8WAR25PQi156l8xsstq4HgtEoiHMg6dp3yf7Ig2m2rs-u5DTJYtMMEMuj7PMI1MfmgIRznpqvQf12M_36cpQahINtYFek6GpfVyw8xZKqvG4qz-4_Lc4rH2oTtG9dsC2YFhjfhqzIKB0Qsb52dEY-UkHlkVGq7mk__54Gt2MZv3cNqPeadg`,
        },
        refetchInterval: 30,
      },
    },
  ],
};
