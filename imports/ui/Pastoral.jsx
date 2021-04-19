import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { PastoralCollection } from '../collections/pastoral';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';

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
}));

export const Pastoral = () => {
  const classes = useStyles();
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [descricao, setDescricao] = useState('');

  const pastoral = useTracker(() => {
    return PastoralCollection.find().fetch();
  });

  const setInitialValues = () => {
    setTitulo(pastoral[0].titulo);
    setAutor(pastoral[0].autor);
    setDescricao(pastoral[0].descricao);
  }

  useEffect(() => {
    if (!titulo && pastoral.length) {
      setInitialValues();
    }
  }, [pastoral])

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <form className={classes.root} autoComplete="off" onSubmit={() => {}}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
              <TextField
                variant="outlined"
                label={"Titulo"}
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
              />
              <TextField
                variant="outlined"
                label={"Autor"}
                value={autor}
                onChange={e => setAutor(e.target.value)}
              />
              <TextField
                variant="outlined"
                label={"Pastoral"}
                multiline
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
              />
              <div>
                <Button 
                  variant="contained"
                  size="large"
                  color="default"
                  classes={{ root: classes.botao}}
                  onClick={setInitialValues}
                >
                  Cancelar
                </Button>
                <Button 
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                  classes={{ root: classes.botao}}
                >
                  Salvar
                </Button>
              </div>
          </Grid>
        </Grid>
      </form>
    </main>
  );
};
