import React, {useLayoutEffect, useState} from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, Container, IconButton } from "@mui/material";
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
            <Card>
                <CardMedia component = "img" image = {animalImage}></CardMedia>
                <Container>
                    <IconButton>
                        <CancelIcon/>
                    </IconButton>
                    <IconButton>
                        <PetsIcon/>
                    </IconButton>
                </Container>
            </Card>
        </>
    );
}

DisplayAnimal.propTypes = {
    dispatch: PropTypes.func
};

export default DisplayAnimal;