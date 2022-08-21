import React from "react";
import PropTypes from "prop-types";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export const GeneralStatistics = (props) => {
    
    return (
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
            </Table>
        </TableContainer>
    );
}

GeneralStatistics.propTypes = {
    dogsSelected: PropTypes.array
};

export default GeneralStatistics;