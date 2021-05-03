import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Drawer from './Drawer';
import { Pastoral } from './Pastoral/Pastoral';
import { Agenda } from './Agenda/Agenda';
import { AoVivo } from './AoVivo/AoVivo';
import { Comunidade } from './Comunidade/Comunidade';
import { Contribua } from './Contribua/Contribua';
import { Contato } from './Contato/Contato';
import { Missao } from './Missao/Missao';
import Login from './Login';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
  },
}));

export const App = () => {
  const classes = useStyles();
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className={classes.container}>
      <Router>
        <Drawer />
        <Switch>
          <Route exact path="/pastoral" component={Pastoral} />
          <Route from="/agenda" component={Agenda} />
          <Route from="/aovivo" component={AoVivo} />
          <Route from="/contato" component={Contato} />
          <Route from="/comunidade" component={Comunidade} />
          <Route from="/contribua" component={Contribua} />
          <Route from="/missao" component={Missao} />
        </Switch>
      </Router>
    </div>
  );
};
