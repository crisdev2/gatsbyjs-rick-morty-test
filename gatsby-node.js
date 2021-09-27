const fetch = require(`node-fetch`)
const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const CharacterStatic = path.resolve(`src/templates/CharacterStatic.js`)

  const result = await fetch(`https://rickandmortyapi.com/api/character`)
  const resultData = await result.json()


  resultData?.results?.map((character, index) => {
    createPage({
      path: `/character-static/${character.id}`,
      component: CharacterStatic,
      context: {
        character
      },
    })
  });



  // result.data.allSamplePages.edges.forEach(edge => {
  //   createPage({
  //     path: `${edge.node.slug}`,
  //     component: blogPostTemplate,
  //     context: {
  //       title: edge.node.title,
  //     },
  //   })
  // })
}

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest,
// }) => {
//   // get data from GitHub API at build time
//   const result = await fetch(`https://rickandmortyapi.com/api/character`)
//   const resultData = await result.json()
  

//   // createNode({
//   //   id: '1',
//   //   name: 'holaaa',
//   //   contentDigest: ('hola')
//   // })

//   return resultData?.results?.map((character, index) => {
//     console.log('crislogdata', character);
//     createNode({
//       ...character,
//       contentDigest: createContentDigest(character)
//     })
//   });


//   // // create node for build time data example in the docs
//   // createNode({
//   //   // nameWithOwner and url are arbitrary fields from the data
//   //   nameWithOwner: resultData.full_name,
//   //   url: resultData.html_url,
//   //   // required fields
//   //   id: `example-build-time-data`,
//   //   parent: null,
//   //   children: [],
//   //   internal: {
//   //     type: `Example`,
//   //     contentDigest: createContentDigest(resultData),
//   //   },
//   // })


// }