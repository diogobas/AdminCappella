import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
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
  containerBotao: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export const Pastoral = () => {
  const classes = useStyles();
  const [id, setId] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [initialTitulo, setInitialTitulo] = useState('');
  const [initialAutor, setInitialAutor] = useState('');
  const [initialDescricao, setInitialDescricao] = useState('');
  const [error, setError] = useState('');
  const [hasChange, setHasChange] = useState(false);

  const pastoral = useTracker(() => {
    return PastoralCollection.find().fetch();
  });


  const setInitialValues = () => {
    const {_id, titulo, autor, descricao} = pastoral[0];

    setId(_id);
    setTitulo(titulo);
    setInitialTitulo(titulo);
    setAutor(autor);
    setInitialAutor(autor);
    setDescricao(descricao);
    setInitialDescricao(descricao);
  }

  useEffect(() => {
    if (!titulo && pastoral.length) {
      setInitialValues();
    }
  }, [pastoral]);

  useEffect(() => {
    if (titulo !== initialTitulo || autor !== initialAutor || descricao !== initialDescricao) {
      return setHasChange(true);
    }

    setHasChange(false);
  }, [titulo, autor, descricao])

  const handleSubmit = e => {
    e.preventDefault()
    
    Meteor.call('pastoral.update', id, titulo, autor, descricao, (error) => {
      if (error) {
        setError('Preencha todos os campos obrigatórios!');
      } else {
        setError('');
        setHasChange(false);
      }
    });
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
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
              <Grid className={classes.containerBotao}>
                <Button 
                  variant="contained"
                  size="large"
                  color="default"
                  classes={{ root: classes.botao}}
                  onClick={setInitialValues}
                  disabled={!hasChange}
                >
                  Cancelar
                </Button>
                <div className="text-danger">{error}</div>
                <Button 
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                  classes={{ root: classes.botao}}
                  disabled={!hasChange}
                >
                  Salvar
                </Button>
              </Grid>
          </Grid>
        </Grid>
      </form>
    </main>
  );
};