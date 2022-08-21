import React, { useReducer } from 'react';
import { Parallax } from "react-parallax";
import TestImage from '../BackgroundImage/TestImage.jpg';

export const BackgroundImageTest = () => {
    <Parallax bgImage={TestImage} strength={800}>
        <div className='content'>
            <span className='img-txt'>testing</span>
        </div>
    </Parallax>
}

export default BackgroundImageTest;