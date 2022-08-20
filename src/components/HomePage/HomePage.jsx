import React, { useReducer } from 'react';
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
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                </Toolbar>
            </AppBar>
            <main>
            {/* Hero unit */}
            <Box sx={{ p: 7 }} />
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
            <Container maxWidth="sm">
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
                <Button variant="contained">Main call to action</Button>
                <Button variant="outlined">Secondary action</Button>
                </Stack>
            </Container>
        </Box>
        {/* APP ITSEF GOES HERE */}

        <Box sx={{ p: 25 }} />

        <Box>
            <Container align = "center">
                <DisplayAnimal dispatch = {props.dispatch}/>
            </Container>
        </Box>

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