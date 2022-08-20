import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage.jsx";
import { ResultsPage } from "./ResultsPage/ResultsPage.jsx";

const reducer = (state, action) => {
    switch (action.type) {
        case "liked":
            state.push({photo: action?.photo, breed: action?.breed, subBreed: action?.subBreed, liked: true});
            return state;
        case "disliked": 
            state.push({photo: action?.photo, breed: action?.breed, subBreed: action?.subBreed, liked: false});
            return state;
        default:
            throw new Error("Invalid Dispatch");
    }
}

export const Wrapper = () => {
    const [dogsSelected, updateDogsSelected] = useReducer(reducer, []);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<HomePage dispatch = {updateDogsSelected}/>}/>
                    <Route path = "/results" element = {<ResultsPage dogsSelected = {dogsSelected}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );  

}

export default Wrapper;