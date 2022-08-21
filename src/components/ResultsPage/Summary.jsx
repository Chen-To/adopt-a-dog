import {Stack,ImageList, ImageListItem}  from '@mui/material';
import { PropTypes } from '@mui/material';
import React, { lazy } from 'react';

const images = [{img:'https://g.petango.com/photos/1686/7e5da2a9-218c-4a5f-9975-29a4faa0f81d.jpg'
    },
    {
        img:'https://g.petango.com/photos/1686/7e5da2a9-218c-4a5f-9975-29a4faa0f81d.jpg'
    },
    {
        img:'https://g.petango.com/photos/1686/7e5da2a9-218c-4a5f-9975-29a4faa0f81d.jpg'
    },
    {
        img:'https://g.petango.com/photos/1686/7e5da2a9-218c-4a5f-9975-29a4faa0f81d.jpg'
    },
    {
        img:'https://g.petango.com/photos/1686/7e5da2a9-218c-4a5f-9975-29a4faa0f81d.jpg'
    }]
export const Summary = () => {
    

        return (
            <Stack spacing={4}>
                <ImageList sx={{width: 400, height:400}}  columns = {3} rowHeight={1}></ImageList>
                {images.map(items=> (
                    <ImageListItem key={items.img   }>
                        <img src={images.img} alt={'joe'} loading ='lazy'></img>
                    </ImageListItem>
                ))}
            </Stack>
        )
    
    

        
}
