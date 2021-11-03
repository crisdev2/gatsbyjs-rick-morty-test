const fetch = require(`node-fetch`)
const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const CharacterStatic = path.resolve(`src/templates/CharacterStatic.js`)

  const { data: secciones }  = await graphql(`
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
  console.log(secciones);

  secciones?.drupal?.taxonomyTermQuery?.entities?.map(async(dato) => {

    reporter.info(`Construyendo sección no. ${dato.tid}`)

    console.log('datoseccion', dato)

    const { data: seccion } = await graphql(`
      query {
        drupal {
          taxonomyTermById (id: "1") {
            ... on Drupal_TaxonomyTermSection {
              tid
              path {
                alias
              }
              entityLabel
              description {
                processed
              }
            }
          }
        }
      }
    `);
      
    // createPage({
    //   path: `/character-static/${character.id}`,
    //   component: CharacterStatic,
    //   context: {
    //     character
    //   },
    // })

  });


}