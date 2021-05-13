import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { LinkAovivo } from '../../collections/linkAovivo';
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

export const AoVivo = () => {
  const classes = useStyles();
  const [id, setId] = useState('');
  const [url, setUrl] = useState('');
  const [initialUrl, setInitialUrl] = useState('');
  const [error, setError] = useState('');
  const [hasChange, setHasChange] = useState(false);

  const linkAovivo = useTracker(() => {
    return LinkAovivo.find({ idIgreja: 1 }).fetch();
  });

  const setInitialValues = () => {
    const { _id, url } = linkAovivo[0];

    setId(_id);
    setUrl(url);
    setInitialUrl(url);
  };

  useEffect(() => {
    if (!url && linkAovivo.length) {
      setInitialValues();
    }
  }, [linkAovivo]);

  useEffect(() => {
    if (url !== initialUrl) {
      return setHasChange(true);
    }

    setHasChange(false);
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Meteor.call('linkAovivo.update', id, url, (error) => {
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
              label={'URL'}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
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
