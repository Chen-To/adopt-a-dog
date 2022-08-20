import React, {useLayoutEffect, useState} from "react";
import PropTypes from "prop-types";

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
        <div>
            <div>TEST</div>
            <img src = {animalImage}></img>
        </div>
    );
}

DisplayAnimal.propTypes = {
    dispatch: PropTypes.func
};

export default DisplayAnimal;