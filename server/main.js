import { Meteor } from 'meteor/meteor';
import { AgendasCollection } from '/imports/api/agendas';
import { LinkAovivo } from '../imports/api/linkAovivo';
import { inserirCalendario } from './agenda';
import { inserirAoVivo } from './aovivo';
import { ComunidadesCollection } from '../imports/api/comunidades';
import { inserirComunidade } from './comunidade';
import { ContatoCollection } from '../imports/api/contato';
import { inserirContato } from './contato';
import { ContribuaCollection } from '../imports/api/contribua';
import { inserirContribua } from './contribua';
import { MissaoCollection } from '../imports/api/missao';
import { inserirMissao } from './missao';
import { PastoralCollection } from '../imports/api/pastoral';
import { inserirPastoral } from './pastoral';

Meteor.startup(() => {
  if (AgendasCollection.find().count() === 0) {
    inserirCalendario();
  }
  if (LinkAovivo.find().count() === 0) {
    inserirAoVivo();
  }
  if (ComunidadesCollection.find().count() === 0) {
    inserirComunidade();
  }
  if (ContatoCollection.find().count() === 0) {
    inserirContato();
  }
  if (ContribuaCollection.find().count() === 0) {
    inserirContribua();
  }
  if (MissaoCollection.find().count() === 0) {
    inserirMissao();
  }
  if (PastoralCollection.find().count() === 0) {
    inserirPastoral();
  }
});
