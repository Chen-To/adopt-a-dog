import React, {useEffect, useState} from "react";

export const DisplayAnimal = () => {
    const [animalImage, setAnimalImage] = useState();
    
    useEffect(() => {
        const getAnimalImage = async () => {
            const resp = await fetch("https://dog.ceo/api/breeds/image/random");
            const info = resp.json();
            if (info.status === "success") {
                setAnimalImage(info.message);
            }
        }
        getAnimalImage();
    });

    return (
        <>
        </>
    );
}

export default DisplayAnimal;