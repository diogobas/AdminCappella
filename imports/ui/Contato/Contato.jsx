import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ContatoCollection } from '../../collections/contato';
import { Grid, makeStyles, TextField } from '@material-ui/core';
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

export const Contato = () => {
  const classes = useStyles();
  const [id, setId] = useState('');
  const [endereco, setEndereco] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [missao, setMissao] = useState('');
  const [pastor, setPastor] = useState('');
  const [initialEndereco, setInitialEndereco] = useState('');
  const [initialLocalizacao, setInitialLocalizacao] = useState('');
  const [initialTelefone, setInitialTelefone] = useState('');
  const [initialEmail, setInitialEmail] = useState('');
  const [initialMissao, setInitialMissao] = useState('');
  const [initialPastor, setInitialPastor] = useState('');
  const [error, setError] = useState('');
  const [hasChange, setHasChange] = useState(false);

  const contato = useTracker(() => {
    return ContatoCollection.find({ idIgreja: 1 }).fetch();
  });

  const setInitialValues = () => {
    const { _id, endereco, localizacao, telefone, email, missao, pastor } = contato[0];

    setId(_id);
    setEndereco(endereco);
    setInitialEndereco(endereco);
    setLocalizacao(localizacao);
    setInitialLocalizacao(localizacao);
    setTelefone(telefone);
    setInitialTelefone(telefone);
    setEmail(email);
    setInitialEmail(email);
    setMissao(missao);
    setInitialMissao(missao);
    setPastor(pastor);
    setInitialPastor(pastor);
  };

  useEffect(() => {
    if (!endereco && contato.length) {
      setInitialValues();
    }
  }, [contato]);

  useEffect(() => {
    if (
      endereco !== initialEndereco ||
      localizacao !== initialLocalizacao ||
      telefone !== initialTelefone ||
      email !== initialEmail ||
      missao !== initialMissao ||
      pastor !== initialPastor
    ) {
      return setHasChange(true);
    }

    setHasChange(false);
  }, [endereco, localizacao, telefone, email, missao, pastor]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Meteor.call('contato.update', id, endereco, localizacao, telefone, email, missao, pastor, (error) => {
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
              label={'Endereço'}
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Localização'}
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Telefone'}
              multiline
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Email'}
              multiline
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Missão'}
              multiline
              value={missao}
              onChange={(e) => setMissao(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Pastor'}
              multiline
              value={pastor}
              onChange={(e) => setPastor(e.target.value)}
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
