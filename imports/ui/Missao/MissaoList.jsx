import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { MissaoCollection } from '../../collections/missao';
import {
  Button,
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

export const MissaoList = ({ onUpdate }) => {
  const classes = useStyles();
  const missao = useTracker(() => {
    return MissaoCollection.find().fetch();
  });

  const handleDelete = (e, id) => {
    e.stopPropagation();

    Meteor.call('missao.delete', id);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Missão</TableCell>
            <TableCell align="right">Contato</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {missao.map((mis) => (
            <TableRow key={mis.nome} hover onClick={() => onUpdate(mis)}>
              <TableCell component="th" scope="row">
                {mis.nome}
              </TableCell>
              <TableCell align="right">{mis.missao}</TableCell>
              <TableCell align="right">{mis.contato}</TableCell>
              <TableCell>
                <Button
                  onClick={e => handleDelete(e, mis._id)}
                  color="secondary"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

MissaoList.propTypes = {
  onUpdate: PropTypes.func.isRequired
}