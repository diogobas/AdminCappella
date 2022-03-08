import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { makeStyles } from '@material-ui/core';
import { EventoCollection } from '../../collections/evento';
import { EventoList } from './EventoList';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  }
}));

export const Evento = () => {
  const classes = useStyles();
  const eventos = useTracker(() => {
    return EventoCollection.find({ idIgreja: 1 }).fetch();
  });

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <EventoList eventos={eventos} />
    </main>
  );
};
