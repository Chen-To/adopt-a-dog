import React, {useLayoutEffect, useState} from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, CardActions, Typography, IconButton } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import CancelIcon from '@mui/icons-material/Cancel';

const maxNum = 100;

export const DisplayAnimal = (props) => {
    const [animalImage, setAnimalImage] = useState();
    const [imagesSeen, setImagesSeen] = useState(0);

    useLayoutEffect(() => {
        const getAnimalImage = async () => {
            const resp = await fetch("https://dog.ceo/api/breeds/image/random");
            const info = await resp.json();
            if (info.status === "success") {
                setAnimalImage(info.message);
                setImagesSeen(imagesSeen+1);
            }
        }
        getAnimalImage();
    }, []);

    return (
        <>
            <Card sx = {{ maxWidth: 500, maxHeight: 700 }}>
                <CardMedia component = "img" height = "540" image = {animalImage} >
                </CardMedia>
                <CardContent style={{backgroundColor: ""}}>
                    <Typography gutterBottom variant = "h5" component = "div">
                        INSERT BREED
                    </Typography>
                    <CardActions>
                        <IconButton color = "error" sx={{ml: 5, mr: 25}}>
                            <CancelIcon 
                            style={{
                                minWidth: "60px",
                                minHeight: "60px"
                              }}/>
                        </IconButton>
                        <IconButton color = "success">
                            <PetsIcon 
                            fontSize = "large"
                            style={{
                                minWidth: "60px",
                                minHeight: "60px"
                              }}/>
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </>
    );
}

DisplayAnimal.propTypes = {
    dispatch: PropTypes.func
};

export default DisplayAnimal;