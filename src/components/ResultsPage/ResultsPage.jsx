import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography } from "@mui/material"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsIcon from '@mui/icons-material/Pets';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DisplayAnimal } from "../DisplayAnimal/DisplayAnimal.jsx";

export const ResultsPage = (props) => {
    const [value, setValue] = useState(0);

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
    }
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };
      
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }
      
     const handleChange = (event, newValue) => {
        setValue(newValue);
    };
      
    return (
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            General Statistics
        </TabPanel>
        <TabPanel value={value} index={1}>
            Summary
        </TabPanel>
        </Box>
    );
      
    // return (
    //     <Container maxWidth="sm">
    //             <Typography
    //                 component="h4"
    //                 variant="h4"
    //                 align="center"
    //                 color="text.primary"
    //                 gutterBottom
    //             >
    //             <FavoriteIcon sx={{ mr: 2, fontSize: 25}} />
    //             Your Results!
    //             <FavoriteIcon sx={{ ml: 2, fontSize: 25}} />
    //             </Typography>
    //             <Typography variant="h5" align="center" color="text.secondary" paragraph>
    //                 Click the button below to access your results and see our recommended breed for you!
    //             </Typography>
    //             <Stack
    //             sx={{ pt: 4 }}
    //             direction="row"
    //             spacing={2}
    //             justifyContent="center"
    //             >
    //             <Button variant="contained">Get Results!</Button>
    //             </Stack>
    //         </Container>
    // );
}

ResultsPage.propTypes = {
    dogsSelected: PropTypes.array
}

export default ResultsPage;