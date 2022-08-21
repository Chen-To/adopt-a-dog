import React, { useRef } from 'react';
import PropTypes from "prop-types";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import PetsIcon from '@mui/icons-material/Pets';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DisplayAnimal } from "../DisplayAnimal/DisplayAnimal.jsx";
import Paper from '@mui/material/Paper';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Adopt A Dog Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export const HomePage = (props) => {
    const instructionsRef = useRef(null);
    const displayAnimalRef = useRef(null);


    const handleScrollInstructions = () => {
        if (instructionsRef && instructionsRef?.current) {
            instructionsRef.current.scrollIntoView({behaviour: "smooth"});
        }
    }

    const handleScrollDisplayAnimal = () => {
        if (displayAnimalRef && displayAnimalRef?.current) {
            displayAnimalRef.current.scrollIntoView({behaviour : "smooth"});
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
          
            {/* Hero unit */}
            <div 
                 style={{
                 width: "100%",
                 height: 800,
                 backgroundSize: "cover",
                 backgroundImage: `url(https://i.imgur.com/bAte9uh.jpeg)`
               }}
            >
            <Box sx={{ p: 16 }} />
            <Container maxWidth="sm">
                <Box  sx={{ p: 5 }} bgcolor="transparent"> 
                
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                    <PetsIcon sx={{ mr: 2, fontSize: 40}} />
                    Adopt A Dog
                    <PetsIcon sx={{ ml: 2, fontSize: 40}} />
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Stuck on deciding the perfect type of dog for you? Welcome to Adopt A Dog, an app to match you with your new furry friend!
                    </Typography>
                    <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    >
                    <Button onClick = {(e) => handleScrollInstructions()} variant="contained">Adopt Now</Button>
                    </Stack>
                 </Box> 
            </Container>
        </div>
        <div 
            style={{
                width: "100%",
                height: 3500,
                backgroundSize: "cover",
                backgroundImage: `url(https://i.imgur.com/vtnoR4G.jpeg)`
            }}
            >

            <Box sx={{ p: 30 }} />

            <Container maxWidth="sm">
            <Box sx={{ p: 3 }} ref = {instructionsRef}/>
            <Typography variant="h3" align="center" color="text.secondary" sx={{color: 'white'}} paragraph>
                Instructions:
            </Typography>
            <Box sx={{ p: 2 }}/>
            <Box sx={{ borderRadius: 1, borderColor:'secondary.main'}}/>
            <Typography variant="h5" align="center" color="text.secondary" sx={{color: 'white'}} paragraph>
                Randomly generated dogs will appear below.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" sx={{color: 'white'}} paragraph>
                Click the 
                <Typography variant="h5" align="center" color="text.secondary" sx={{color: 'green'}} nowrap> green paw button</Typography>
                 if you love what you see.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" sx={{color: 'white'}} paragraph>
                Click the 
                <Typography variant="h5" align="center" color="text.secondary" sx={{color: 'red'}} nowrap> red X button</Typography>
                 if you are not interested.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" sx={{color: 'white'}} paragraph>
                Click the 
                <Typography variant="h5" align="center" color="text.secondary" sx={{color: 'gray'}} nowrap> grey hand button</Typography>
                 to stop your selection.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" sx={{color: 'white'}} paragraph>
                At the end, we will determine which breeds you love the most!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" sx={{color: 'white'}} paragraph>
                Note: Please make a selection of at least 10 dogs.
            </Typography>
            </Container>
        
            <Box sx={{ m: 12 }} />
            <Stack 
                    sx={{ mt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    >
                    <Button onClick = {(e) => handleScrollDisplayAnimal()} variant="contained">Begin!</Button>
                    </Stack>

        {/* APP ITSELF GOES HERE */}

        <Box sx={{ p: 52 }} />

        <Box ref = {displayAnimalRef}>
            <Container align = "center">
                <DisplayAnimal dispatch = {props.dispatch}/>
            </Container>
        </Box>
        </div>

        </main>
      {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
            Adopt A Dog
            </Typography>
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
            Created by Tory Chen, Saheen Jey, Bobby Liang, Richard Liu
            </Typography>
            <Copyright />
        </Box>
      
    </ThemeProvider>
    );
}

HomePage.propTypes = {
    dispatch: PropTypes.func
};

export default HomePage;