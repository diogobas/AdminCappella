import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ContribuaCollection } from '../../collections/contribua';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { ButtonsControl } from '../components/ButtonsControl';

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
      margin: theme.spacing(1),
    },
  },
}));

export const Contribua = () => {
  const classes = useStyles();
  const [id, setId] = useState('');
  const [nomeBanco, setNomeBanco] = useState('');
  const [banco, setBanco] = useState('');
  const [agencia, setAgencia] = useState('');
  const [cc, setCC] = useState('');
  const [operacao, setOperacao] = useState('');
  const [igreja, setIgreja] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [initialNomeBanco, setInitialNomeBanco] = useState('');
  const [initialBanco, setInitialBanco] = useState('');
  const [initialAgencia, setInitialAgencia] = useState('');
  const [initialCC, setInitialCC] = useState('');
  const [initialOperacao, setInitialOperacao] = useState('');
  const [initialIgreja, setInitialIgreja] = useState('');
  const [initialCnpj, setInitialCnpj] = useState('');
  const [error, setError] = useState('');
  const [hasChange, setHasChange] = useState(false);

  const contribua = useTracker(() => {
    return ContribuaCollection.find({ idIgreja: 1 }).fetch();
  });

  const setInitialValues = () => {
    const { _id, nomeBanco, banco, agencia, cc, operacao, igreja, cnpj } = contribua[0];

    setId(_id);
    setNomeBanco(nomeBanco);
    setInitialNomeBanco(nomeBanco);
    setBanco(banco);
    setInitialBanco(banco);
    setAgencia(agencia);
    setInitialAgencia(agencia);
    setCC(cc);
    setInitialCC(cc);
    setOperacao(operacao);
    setInitialOperacao(operacao);
    setIgreja(igreja);
    setInitialIgreja(igreja);
    setCnpj(cnpj);
    setInitialCnpj(cnpj);
  };

  useEffect(() => {
    if (!nomeBanco && contribua.length) {
      setInitialValues();
    }
  }, [contribua]);

  useEffect(() => {
    if (
      nomeBanco !== initialNomeBanco ||
      banco !== initialBanco ||
      agencia !== initialAgencia ||
      cc !== initialCC ||
      operacao !== initialOperacao ||
      igreja !== initialIgreja ||
      cnpj !== initialCnpj
    ) {
      return setHasChange(true);
    }

    setHasChange(false);
  }, [nomeBanco, banco, agencia, cc, operacao, igreja, cnpj]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Meteor.call('contribua.update', id, nomeBanco, banco, agencia, cc, operacao, igreja, cnpj, (error) => {
      if (error) {
        setError('Preencha todos os campos obrigatórios!');
      } else {
        setError('');
        setHasChange(false);
      }
    });
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <TextField
              variant="outlined"
              label={'Nome do Banco'}
              value={nomeBanco}
              onChange={(e) => setNomeBanco(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Número do Banco'}
              value={banco}
              onChange={(e) => setBanco(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Agência'}
              multiline
              value={agencia}
              onChange={(e) => setAgencia(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Conta Corrente'}
              multiline
              value={cc}
              onChange={(e) => setCC(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Operação'}
              multiline
              value={operacao}
              onChange={(e) => setOperacao(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Igreja'}
              multiline
              value={igreja}
              onChange={(e) => setIgreja(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'CNPJ'}
              multiline
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <ButtonsControl
              hasChange={hasChange} 
              error={error} 
              onCancel={() => {
                setInitialValues();
                setError('');
              }} 
            />
          </Grid>
        </Grid>
      </form>
    </main>
  );
};
