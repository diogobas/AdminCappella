import React from 'react';
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
  root: {
    '& .MuiFormControl-root': {
        width: '100%',
        margin: theme.spacing(1)
    }
  },
  botao: {
    margin: theme.spacing(0.5)
  },
  containerBotao: {
    display: 'flex',
    flexDirection: 'row',
  },
  list: {
    width: "100%",
    marginTop: theme.spacing(5),
  },
}));

export const Agenda = () => {
  const classes = useStyles();
  const agendas = useTracker(() => {
    return AgendasCollection.find().fetch();
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
                        <Typography className={classes.list} variant="h4" component="h4">{dia}</Typography>
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
