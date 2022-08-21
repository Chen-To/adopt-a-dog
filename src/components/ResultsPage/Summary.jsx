import {Stack,ImageList, ImageListItem}  from '@mui/material';
import PropTypes from "prop-types";
import React, { lazy } from 'react';
import {Box, Card, Typography, CardContent} from "@mui/material";
export const Summary = (props) => {
    console.log(props.dogsSelected);

        return (
            <Box sx ={{width: "100%", height: "100%"}} justify="space-between" justifyContent="center">
                <ImageList sx={{
                    gridAutoFlow: "row",
                    gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr)) !important",
                }} columns = {3} rowHeight={1} justify="space-between">
                
                {props.dogsSelected.map(items=> (
                    <Card sx={{width:200, height: 200}} key={items.photo}>
                        <CardContent>
                        <ImageListItem key={items.photo}>
                            <img src={items.photo} alt={items.breed} loading ='lazy' ></img>
                            <Typography>{items.breed}</Typography>
                        </ImageListItem>
                        </CardContent>
                        
                    </Card>
                    
                ))}
                </ImageList>
            </Box>
            
        )
    
    

        
}

Summary.propTypes = {
    dogsSelected: PropTypes.array
}

export default Summary
