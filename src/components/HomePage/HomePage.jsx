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
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export const HomePage = (props) => {
    const displayAnimalRef = useRef(null);

    const handleScroll = () => {
        if (displayAnimalRef?.current) {
            displayAnimalRef.current.scrollIntoView({behaviour : "smooth"});
            console.log("HERE");
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
            <Box sx={{ p: 12 }} />
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
                    <Button onClick = {(e) => handleScroll()} variant="contained">Adopt Now</Button>
                    </Stack>
                 </Box> 
            </Container>
        </div>


        <div 
            style={{
                width: "100%",
                height: 800,
              }}
            >
        <Container maxWidth="sm">
<Typography variant="h4" align="center" color="text.secondary" paragraph>
What you need to do.
</Typography>
  <Box sx={{ p: 2 }}/>
  <Box sx={{ borderRadius: 1, borderColor:'secondary.main'}}/>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
Randomly generated dogs will appear below.
</Typography>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
Click the green paw button if you love what you see.
</Typography>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
Click the red X button if the dog is not for you.
</Typography>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
At the end, we will determine which breeds you love the most!
</Typography>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
  How many dogs would you like to see?
  </Typography>
  <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
                >
                <Button onClick = {(e) => handleScroll()} variant="contained">Enter Number of Dogs</Button>
                </Stack>
</Container>
        </div>


        {/* APP ITSEF GOES HERE */}

        <Box sx={{ p: 3 }} />

        <Box ref = {displayAnimalRef}>
            <Container align = "center">
                <DisplayAnimal dispatch = {props.dispatch}/>
            </Container>
        </Box>


        <div 
            style={{
                width: "100%",
                height: 800,
              }}
            >
        <Container maxWidth="sm">
<Typography variant="h4" align="center" color="text.secondary" paragraph>
What you need to do.
</Typography>
  <Box sx={{ p: 2 }}/>
  <Box sx={{ borderRadius: 1, borderColor:'secondary.main'}}/>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
Randomly generated dogs will appear below.
</Typography>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
Click the green paw button if you love what you see.
</Typography>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
Click the red X button if the dog is not for you.
</Typography>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
At the end, we will determine which breeds you love the most!
</Typography>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
  How many dogs would you like to see?
  </Typography>
  <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
                >
                <Button onClick = {(e) => handleScroll()} variant="contained">Enter Number of Dogs</Button>
                </Stack>
</Container>
        </div>

        </main>
      {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
            Footer
            </Typography>
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
            Something here to give the footer a purpose!
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