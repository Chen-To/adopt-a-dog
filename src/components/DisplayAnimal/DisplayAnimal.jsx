import React, {useLayoutEffect, useState} from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, CardActions, Typography, IconButton } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import CancelIcon from '@mui/icons-material/Cancel';

const maxNum = 100;
const breedRegex = /\/breeds\/(.+)\//;

export const DisplayAnimal = (props) => {
    const [animalImage, setAnimalImage] = useState();
    const [imagesSeen, setImagesSeen] = useState(1);

    const handleReaction = (reaction) => {
        if (imagesSeen < 100) {
            props.dispatch({type: reaction, photo: animalImage.photo, breed: animalImage.breed});
            setImagesSeen(imagesSeen+1);
        }
    }

    useLayoutEffect(() => {
        const getAnimalImage = async () => {
            const resp = await fetch("https://dog.ceo/api/breeds/image/random");
            const info = await resp.json();
            if (info.status === "success") {
                const breedMatch = breedRegex.exec(info.message);
                if (breedMatch) {
                    const breed = breedMatch?.[1];
                    setAnimalImage({photo: info.message, breed: breed});
                }
            }
        }
        getAnimalImage();
    }, [imagesSeen]);

    return (
        <div>
            <Card sx = {{ maxWidth: 500, maxHeight: 700 }}>
                <CardMedia component = "img" height = "540" image = {animalImage ? animalImage.photo : null} >
                </CardMedia>
                <CardContent style={{backgroundColor: ""}}>
                    <Typography gutterBottom variant = "h5" component = "div">
                        {animalImage ? animalImage?.breed ?? "" : ""}
                    </Typography>
                    <CardActions>
                        <IconButton onClick = {(e) => handleReaction("disliked")} color = "error" sx={{ml: 5, mr: 25}}>
                            <CancelIcon 
                            style={{
                                minWidth: "60px",
                                minHeight: "60px"
                              }}/>
                        </IconButton>
                        <IconButton onClick = {(e) => handleReaction("liked")} color = "success">
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
        </div>
    );
}

DisplayAnimal.propTypes = {
    dispatch: PropTypes.func
};

export default DisplayAnimal;