import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { makeStyles, Typography } from '@material-ui/core';
import { AgendasCollection } from '../../collections/agendas';
import { AgendaList } from './AgendaList';

const dias = [
  'domingo',
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sabado',
];

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  dia: {
    width: "100%",
    marginTop: theme.spacing(5),
  },
}));

export const Agenda = () => {
  const classes = useStyles();
  const agendas = useTracker(() => {
    const idIgreja = Meteor.user().profile.idIgreja;

    return AgendasCollection.find({ idIgreja }).fetch();
  });

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {
        dias.map(dia => {
          return (
            agendas.map(item => {
              return (
                <>
                  {
                    (item.dia === dia) && (
                      <>
                        <Typography className={classes.dia} variant="h4" component="h4">{dia}</Typography>
                        <AgendaList key={item._id} id={item._id} dia={dia} atividades={item.data} />
                      </>
                    )
                  }
                </>
              )
          }))
        })
      }
    </main>
  );
};
