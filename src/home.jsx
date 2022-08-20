import React from "react";
import { createRoot } from "react-dom/client";
import { Wrapper } from "./components/Wrapper.jsx";

const Home = () => {
    return (
        <>
            <Wrapper/>
        </>
    );
}

const container = document.getElementById("react-personal-target");
const root = createRoot(container);
root.render(<Home tab = "home"/>);