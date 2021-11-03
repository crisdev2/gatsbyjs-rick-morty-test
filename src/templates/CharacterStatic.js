import * as React from "react"
import axios from "axios"
import { Helmet } from "react-helmet"
import { CardMedia } from "@mui/material"

const CharacterStatic = ({ pageContext: { seccion, articulos } }) => {

  // console.log('crislogc', character)

  return (
    <main>

      {seccion?.entityLabel}


      {/* {character &&
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Personaje: {character.name}</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content={`${character.name} is an ${character.species} with status ${character.status}`} />
          <meta name="author" content="John Doe" />
        </Helmet>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={character.image}
            alt={character.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.created}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" >Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </>
      } */}
    </main>
  )
}

export default CharacterStatic
