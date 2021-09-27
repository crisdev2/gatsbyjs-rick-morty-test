import * as React from "react"
import axios from "axios"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { navigate } from "gatsby-link"

// markup
const IndexPage = () => {

  const [characters, setCharacters] = React.useState();

  React.useEffect(() => {
    axios.get(`//rickandmortyapi.com/api/character?${Math.random()}`)
      .then(res => {
        const data = res.data;
        if (data?.results) {
          setCharacters(data?.results);
        }
        console.log('crislog', res.data?.results)
      })
  }, []);

  return (
    <main>

      <Grid container spacing={6}>
  
        {characters?.map((character, index) => (
          <Grid item sm={4}>
            <Card sx={{ maxWidth: 345 }} key={index}>
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
                <Button size="small" onClick={() => navigate(`/character-static/${character.id}`)}>View static</Button>
                <Button size="small" onClick={() => navigate(`/character/${character.id}`)}>View dinamic</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

      </Grid>

    </main>
  )
}

export default IndexPage
