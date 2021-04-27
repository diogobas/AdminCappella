import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { MissaoList } from './MissaoList';

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

export const Missao = () => {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [missao, setMissao] = useState('');
  const [contato, setContato] = useState('');
  const [error, setError] = useState('');
  const [hasChange, setHasChange] = useState(false);

  const setInitialValues = () => {
    setNome('');
    setMissao('');
    setContato('');
  }

  useEffect(() => {
    if (
      nome !== '' ||
      missao !== '' ||
      contato !== ''
    ) {
      return setHasChange(true);
    }

    setHasChange(false);
  }, [nome, missao, contato]);

  const handleSubmit = e => {
    e.preventDefault()
    
    Meteor.call('missao.insert', nome, missao, contato, (error) => {
      if (error) {
        setError('Preencha todos os campos obrigatórios!');
      } else {
        setError('');
        setInitialValues();
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
                label={"Nome"}
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
              <TextField
                variant="outlined"
                label={"Missão"}
                value={missao}
                onChange={e => setMissao(e.target.value)}
              />
              <TextField
                variant="outlined"
                label={"Contato"}
                multiline
                value={contato}
                onChange={e => setContato(e.target.value)}
              />
              <Grid className={classes.containerBotao}>
              <Button
                variant="contained"
                size="large"
                color="default"
                classes={{ root: classes.botao }}
                onClick={() => {
                  setInitialValues();
                  setError('');
                }}
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
                classes={{ root: classes.botao }}
                disabled={!hasChange}
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <MissaoList />
    </main>
  );
};