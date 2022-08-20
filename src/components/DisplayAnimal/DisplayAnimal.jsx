import React, {useEffect, useState, useReducer} from "react";

export const DisplayAnimal = () => {
    const [animalImage, setAnimalImage] = useState();
    
    useEffect(() => {
        const getAnimalImage = async () => {
            const resp = await fetch("https://dog.ceo/api/breeds/image/random");
            const info = await resp.json();
            if (info.status === "success") {
                setAnimalImage(info.message);
            }
            console.log(info);
        }
        getAnimalImage();
    }, []);

    return (
        <>
            {animalImage || console.log(animalImage) ? <img src = {animalImage}></img> : null}
        </>
    );
}

export default DisplayAnimal;