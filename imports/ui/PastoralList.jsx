import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { PastoralCollection } from '../collections/pastoral';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const PastoralList = () => {
    const classes = useStyles();
    const pastoral = useTracker(() => {
        return PastoralCollection.find().fetch();
    });

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Titulo</TableCell>
                        <TableCell align="right">Autor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        pastoral.map((past) => (
                            <TableRow key={past.titulo}>
                                <TableCell component="th" scope="row">{past.titulo}</TableCell>
                                <TableCell align="right">{past.autor}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};
