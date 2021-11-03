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
        taxonomyTermQuery (
          filter: {
            conditions: [
              {
                field: "vid",
                operator: EQUAL,
                value: "section"
              }
            ]
          }, limit: 20
        ) {
          entities {
            ... on Drupal_TaxonomyTermSection {
              tid
              path {
                alias
              }
            }
          }
        }
      }
    }
  `)
  console.log(data);
}