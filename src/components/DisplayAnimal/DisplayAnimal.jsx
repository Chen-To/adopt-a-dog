import React, {useLayoutEffect, useState, useReducer} from "react";

export const DisplayAnimal = () => {
    const [animalImage, setAnimalImage] = useState();
    
    useLayoutEffect(() => {
        const getAnimalImage = async () => {
            const resp = await fetch("https://dog.ceo/api/breeds/image/random");
            const info = await resp.json();
            if (info.status === "success") {
                setAnimalImage(info.message);
            }
        }
        console.log("BOB");
        getAnimalImage();
    }, []);

    return (
        <div>
            <div>TEST</div>
            <img src = {animalImage}></img>
        </div>
    );
}

export default DisplayAnimal;