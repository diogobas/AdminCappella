import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ComunidadesCollection } from '../../collections/comunidades';
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

export const Comunidade = () => {
  const classes = useStyles();
  const [id, setId] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [youtube, setYoutube] = useState('');
  const [spotify, setSpotify] = useState('');
  const [site, setSite] = useState('');
  const [initialFacebook, setInitialFacebook] = useState('');
  const [initialInstagram, setInitialInstagram] = useState('');
  const [initialWhatsapp, setInitialWhatsapp] = useState('');
  const [initialYoutube, setInitialYoutube] = useState('');
  const [initialSpotify, setInitialSpotify] = useState('');
  const [initialSite, setInitialSite] = useState('');
  const [error, setError] = useState('');
  const [hasChange, setHasChange] = useState(false);

  const comunidades = useTracker(() => {
    return ComunidadesCollection.find().fetch();
  });

  const setInitialValues = () => {
    const { _id, facebook, instagram, whatsapp, youtube, spotify, site } = comunidades[0];

    setId(_id);
    setFacebook(facebook);
    setInitialFacebook(facebook);
    setInstagram(instagram);
    setInitialInstagram(instagram);
    setWhatsapp(whatsapp);
    setInitialWhatsapp(whatsapp);
    setYoutube(youtube);
    setInitialYoutube(youtube);
    setSpotify(spotify);
    setInitialSpotify(spotify);
    setSite(site);
    setInitialSite(site);
  };

  useEffect(() => {
    if (!facebook && comunidades.length) {
      setInitialValues();
    }
  }, [comunidades]);

  useEffect(() => {
    if (
      facebook !== initialFacebook ||
      instagram !== initialInstagram ||
      whatsapp !== initialWhatsapp ||
      youtube !== initialYoutube ||
      spotify !== initialSpotify ||
      site !== initialSite
    ) {
      return setHasChange(true);
    }

    setHasChange(false);
  }, [facebook, instagram, whatsapp, youtube, spotify, site]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Meteor.call('comunidades.update', id, facebook, instagram, whatsapp, youtube, spotify, site, (error) => {
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
              label={'Facebook'}
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Instagram'}
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'WhatsApp'}
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'YouTube'}
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Spotify'}
              value={spotify}
              onChange={(e) => setSpotify(e.target.value)}
            />
            <TextField
              variant="outlined"
              label={'Site'}
              value={site}
              onChange={(e) => setSite(e.target.value)}
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
