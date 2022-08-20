import React from "react";
import { createRoot } from "react-dom/client";

const Home = () => {
    return (
        <div>Hello World.</div>
    );
}

const container = document.getElementById("react-personal-target");
const root = createRoot(container);
root.render(<Home tab = "home"/>);