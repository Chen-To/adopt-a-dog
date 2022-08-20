import React, { useReducer } from "react";
import { DisplayAnimal } from "./DisplayAnimal/DisplayAnimal.jsx";
import { HomePage } from "./HomePage/HomePage.jsx";
import { ResultsPage } from "./ResultsPage/ResultsPage.jsx";

const reducer = (state, action) => {
    switch (action.type) {
        case "liked":
            state.push({photo: action?.photo, breed: action?.breed, liked: true});
            return state;
        case "disliked": 
            state.push({photo: action?.photo, breed: action?.breed, liked: false});
            return state;
        default:
            throw new Error("Invalid Dispatch");
    }
}

export const Wrapper = () => {
    const [dogsSelected, updateDogsSelected] = useReducer(reducer, []);
    return (
        <>
            <HomePage dispatch = {updateDogsSelected}/> 
            {/* <DisplayAnimal/> */}
            <ResultsPage/>
        </>
    );  

}

export default Wrapper;