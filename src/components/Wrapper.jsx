import React from "react";
import { DisplayAnimal } from "./DisplayAnimal/DisplayAnimal.jsx";
import { HomePage } from "./HomePage/HomePage.jsx";

export const Wrapper = () => {
    
    return (
        <>
            <HomePage/>
            <DisplayAnimal/>
        </>
    );  

}

export default Wrapper;