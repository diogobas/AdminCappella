import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { AgendasCollection } from '../../collections/agendas';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { Agenda } from './Agenda';

const dias = [
  'domingo',
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sabado',
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const AgendaList = () => {
  const classes = useStyles();
  const agendas = useTracker(() => {
    return AgendasCollection.find().fetch();
  });

  return (
    <div>
      <h2>Agenda</h2>
      <ul>
        {dias.map((dia) => {
          return (
            <TableContainer component={Paper} key={dia}>
              <Typography variant="h4" component="h4">{dia}</Typography>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Horario</TableCell>
                    <TableCell align="right">Atividade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    agendas.map((item) => {
                      if (item.dia === dia) {
                        return item.data.map((dt) => (
                          <TableRow key={dt.horario}>
                            <TableCell component="th" scope="row">
                              {dt.horario}
                            </TableCell>
                            <TableCell align="right">{dt.atividade}</TableCell>
                          </TableRow>
                        ))
                      }
                    })
                  }
                </TableBody>
              </Table>
              <Agenda dia={dia} />
            </TableContainer>
          );
        })}
      </ul>
    </div>
  );
};
