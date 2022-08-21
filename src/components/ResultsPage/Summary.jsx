import {Stack,ImageList, ImageListItem}  from '@mui/material';
import PropTypes from "prop-types";
import React, { lazy } from 'react';
import {Box, Card, Typography, CardContent} from "@mui/material";
export const Summary = (props) => {
    console.log(props.dogsSelected);

        return (
            <Box sx ={{width: "100%", height: "100%"}} justify="space-between" justifyContent="center">
                <Typography text-align="center" >Here are all the photos and breeds that you liked!</Typography>
                <ImageList sx={{
                    gridAutoFlow: "row",
                    gridTemplateColumns: "repeat(auto-fill,minmax(124px,1fr)) !important",
                }} columns = {3} rowHeight={1} justify="space-between">
                
                {props.dogsSelected.map(items=> (
                    <Card sx={{height: 240}} key={items.photo}>
                        <CardContent>
                        <ImageListItem key={items.photo}>
                            <img src={items.photo} alt={items.breed} loading ='lazy'></img>
                            <Typography text-align="center">{items.breed}</Typography>
                        </ImageListItem>
                        </CardContent >
                        
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
