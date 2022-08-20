import React, {useLayoutEffect, useState} from "react";
import PropTypes from "prop-types";

export const DisplayAnimal = (props) => {
    const [animalImage, setAnimalImage] = useState();
    
    useLayoutEffect(() => {
        const getAnimalImage = async () => {
            const resp = await fetch("https://dog.ceo/api/breeds/image/random");
            const info = await resp.json();
            if (info.status === "success") {
                setAnimalImage(info.message);
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