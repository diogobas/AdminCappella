import React from 'react';
import { Agenda } from './Agenda.jsx';
import { AoVivo } from './AoVivo.jsx';
import { Comunidade } from './Comunidade.jsx';
import { Contato } from './Contato.jsx';
import { Contribua } from './Contribua.jsx';
import { Missao } from './Missao.jsx';

export const App = () => (
  <div>
    <Agenda/>
    <AoVivo/>
    <Comunidade/>
    <Contato/>
    <Contribua/>
    <Missao/>
  </div>
);
