import * as React from "react"
import axios from "axios"
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material"

const CharcterPage = (props) => {

  const [character, setCharacter] = React.useState();

  React.useEffect(() => {
    axios.get(`//rickandmortyapi.com/api/character/${props.character}`)
      .then(res => {
        const data = res.data;
        if (data) {
          setCharacter(data);
        }
      })
  }, []);

  console.log('crislogc', props)

  return (
    <main>

      {character &&
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
      }
    </main>
  )
}

export default CharcterPage
