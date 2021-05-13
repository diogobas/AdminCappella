import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { makeStyles } from '@material-ui/core';
import { MissaoList } from './MissaoList';
import { MissaoCollection } from '../../collections/missao';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export const Missao = () => {
  const classes = useStyles();
  const missao = useTracker(() => {
    const idIgreja = Meteor.user().profile.idIgreja;

    return MissaoCollection.find({ idIgreja }).fetch();
  });

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <MissaoList missoes={missao} />
    </main>
  );
};