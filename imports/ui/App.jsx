import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { makeStyles} from '@material-ui/core';
import Drawer from './Drawer';
import { Pastoral } from './Pastoral';
import { Agenda } from './Agenda';
import { AoVivo } from './AoVivo';
import { Comunidade } from './Comunidade';
import { Contribua } from './Contribua';
import { Contato } from './Contato';
import { Missao } from './Missao';

const useStyles = makeStyles(() => ({
 container: {
    display: "flex"
  }
}));

export const App = () => {
  const classes = useStyles();
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
