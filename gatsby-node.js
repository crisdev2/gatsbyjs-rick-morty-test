const fetch = require(`node-fetch`)
const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const CharacterStatic = path.resolve(`src/templates/CharacterStatic.js`)

  const data  = await graphql(`
  query {
    drupal {
      taxonomyTermById (id: "1") {
        ... on TaxonomyTermSection {
            tid
        }
    }
    }
}
  `)
  console.log(data);}