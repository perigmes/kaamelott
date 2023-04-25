import React from 'react';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { Container, Grid, Stack, TextField, responsiveFontSizes } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ThemeProvider, createMuiTheme } from '@emotion/react';
import "./app.scss";
import { createTheme, makeStyles } from '@mui/material/styles';
import { fontGrid } from '@mui/material/styles/cssUtils';

const theme = createTheme({
  palette: {
    primary :{ 
    main: '#6203AD',
  }}

});

const App = () => {


  return (
    <ThemeProvider theme={theme}>
    <Container  maxWidth="md">  
   <div className='App'>
        <Typography fontFamily={"Roboto"} margin={"10px"} fontWeight={"bold"} variant="h4" component="h1" color={"black"} align="center" >Citations</Typography>
              <Box className="boite" sx={{border: "4px solid #6203AD", padding: "20px"}}>
                  <blockquote>
                    <Typography id="citation" fontFamily={"Roboto"} fontWeight={"bold"} variant='subtitle1' textAlign={"center"} color={"primary"}>
                      blabla
                    </Typography>
                  </blockquote>
                    <Typography id="auteur" fontFamily={"Roboto"} textAlign={"right"} color={"primary"} >
                    auteur, <cite id="episode">episode</cite>
                    </Typography>
                  <Button color="primary"  className='favori' type="button" name="favori" variant='text' startIcon={<StarBorderIcon />} size='small' style={{justifyContent: "center"}} margin="10px auto">
                    Mettre en favoris
                  </Button>
              </Box>

              <Typography component={"h2"} variant='h7' textAlign={"center"} fontFamily={"Roboto"} margin={"20px"}>Afficher une autre citation</Typography>
              <Grid container direction={"row"} spacing={2} wrap='nowrap' justifyContent={"center"}>

              <Grid item>
                <Button variant="outlined" type="button" startIcon={<VisibilityIcon />} name='mescitations' size="small" style={{minWidth: "max-content", borderRadius: "10px", responsiveFontSizes:"0.5rem"}}>
                    Parmi mes citations
                </Button>
              </Grid>

              <Grid item>
                <Button id="citationkaamelot" variant="outlined" startIcon={<VisibilityIcon />} type="button" name='citationskaamelot' size='small' color='primary' style={{minWidth: "max-content", borderRadius: "10px"}}>
                    Parmi les citations de Kaamelot
                </Button>
              </Grid>

            </Grid>

          <div>
           <Typography component={"h2"} variant='h6' textAlign={"center"} margin={"20px"}>Mes citations</Typography>
            <Grid container  spacing={1} direction={"row"} wrap='nowrap' justifyContent={"center"}>

              <Grid item sx="2">
                <Button className='ajouter'
                  variant="contained" 
                  startIcon={<AddIcon />} type="button" name='ajouter citation' style={{minWidth: "max-content", borderRadius: "10px"}}>
                    Ajouter une citation
                  </Button>
              </Grid>

              <Grid item sm="auto" style={{width: "100%"}}>
              <TextField placeholder='Rechercher dans mes citations' type='text' style={{width: "100%", }} />
              </Grid>
            </Grid>
          </div>
      </div>
      </Container>
            </ThemeProvider>
  );
};

export default App;