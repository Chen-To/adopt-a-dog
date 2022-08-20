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
            <Card sx = {{ maxWidth: 500 }}>
                <CardMedia component = "img" height = "600" image = {animalImage}>

                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant = "h5" component = "div">
                    </Typography>
                    <CardActions>
                        <IconButton>
                            <CancelIcon/>
                        </IconButton>
                        <IconButton>
                            <PetsIcon/>
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