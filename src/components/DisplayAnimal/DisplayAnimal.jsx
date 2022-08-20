import React, {useLayoutEffect, useState} from "react";
import PropTypes from "prop-types";


import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



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
        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="600"
        image= {animalImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Put breed here
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Extra info?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Pass</Button>
        <Button size="large">Smash</Button>
      </CardActions>
    </Card>
        // <div>
        //     <div>TEST</div>
        //     <img src = {animalImage}></img>
        // </div>
    );
}

DisplayAnimal.propTypes = {
    dispatch: PropTypes.func
};

export default DisplayAnimal;