import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  botao: {
    margin: theme.spacing(0.5),
  },
  containerBotao: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export const ButtonsControl = ({hasChange, error, onCancel}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.containerBotao}>
      <Button
        variant="contained"
        size="large"
        color="default"
        classes={{ root: classes.botao }}
        onClick={onCancel}
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
  );
};

ButtonsControl.propTypes = {
  hasChange: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};
