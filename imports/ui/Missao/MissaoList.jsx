import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { MissaoCollection } from '../../collections/missao';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const MissaoList = () => {
  const classes = useStyles();
  const missao = useTracker(() => {
    return MissaoCollection.find().fetch();
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Missão</TableCell>
            <TableCell align="right">Contato</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {missao.map((mis) => (
            <TableRow key={mis.nome}>
              <TableCell component="th" scope="row">
                {mis.nome}
              </TableCell>
              <TableCell align="right">{mis.missao}</TableCell>
              <TableCell align="right">{mis.contato}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
