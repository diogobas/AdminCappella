import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

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

export const Agenda = ({dia}) => {
  const classes = useStyles();
  const [horario, setHorario] = useState('');
  const [atividade, setAtividade] = useState('');
  const [error, setError] = useState('');
  const [hasChange, setHasChange] = useState(false);

  const setInitialValues = () => {
    setHorario('');
    setAtividade('');
  }

  useEffect(() => {
    if (
      horario !== '' ||
      atividade !== ''
    ) {
      return setHasChange(true);
    }

    setHasChange(false);
  }, [horario, atividade]);

  const handleSubmit = e => {
    e.preventDefault()
    
    Meteor.call('agenda.insert', dia, horario, atividade, (error) => {
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
                label={"Horario"}
                value={horario}
                onChange={e => setHorario(e.target.value)}
              />
              <TextField
                variant="outlined"
                label={"Atividade"}
                value={atividade}
                onChange={e => setAtividade(e.target.value)}
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
    </main>
  );
};

Agenda.propTypes = {
  dia: PropTypes.string.isRequired
}