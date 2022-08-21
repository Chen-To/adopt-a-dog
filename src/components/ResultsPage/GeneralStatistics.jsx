import React from "react";
import PropTypes from "prop-types";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const calculatePercentage = (likedAmount, dislikedAmount) => {
    return Math.round((likedAmount / (likedAmount + dislikedAmount)) * 1000) / 10;
}

export const GeneralStatistics = (props) => {
    const [processedStatistics, setProcessedStatistics] = useState([]);
    useEffect(() => {
        console.log(props.dogsSelected);
        const breedToArrIndex = new Map();
        const resultsArr = [];
        for (const dog of props.dogsSelected) {
            const index = breedToArrIndex.get(dog.breed);
            if (index === 0 || index) {
                if (dog.liked) {
                    resultsArr[index].liked += 1;
                }
                else {
                    resultsArr[index].disliked += 1;
                }
            }
            else {
                breedToArrIndex.set(dog.breed, resultsArr.length);
                if (dog.liked) {
                    resultsArr.push({breed: dog.breed, liked: 1, disliked: 0});
                }
                else {
                    resultsArr.push({breed: dog.breed, liked: 0, disliked: 1});
                }

            }
        }
        setProcessedStatistics(resultsArr);
    }, [props.dogsSelected]);

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Breed</TableCell>
                            <TableCell>Liked Amount</TableCell>
                            <TableCell>Disliked Amount</TableCell>
                            <TableCell>Liked Percentage</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {processedStatistics.map((row) => (
                            <TableRow key = {row.breed}>
                                <TableCell>{row.breed.substring(0,1).toUpperCase() + row.breed.substring(1)}</TableCell>
                                <TableCell>{row.liked}</TableCell>
                                <TableCell>{row.disliked}</TableCell>
                                <TableCell sx = {calculatePercentage(row.liked, row.disliked) > 50 ? {color: "green"} : {color: "red"}}>
                                    {calculatePercentage(row.liked, row.disliked) + "%"}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer" align = "center ">
                <Link href = "https://www.petfinder.com/" target = "_blank" >Find Potential Adoption Opportunities</Link>
            </Box>
        </>
    );
}

GeneralStatistics.propTypes = {
    dogsSelected: PropTypes.array
};

export default GeneralStatistics;