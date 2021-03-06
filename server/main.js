import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { AgendasCollection } from '/imports/collections/agendas';
import { LinkAovivo } from '../imports/collections/linkAovivo';
import { inserirCalendario } from './agenda';
import { inserirAoVivo } from './aovivo';
import { ComunidadesCollection } from '../imports/collections/comunidades';
import { inserirComunidade } from './comunidade';
import { ContatoCollection } from '../imports/collections/contato';
import { inserirContato } from './contato';
import { ContribuaCollection } from '../imports/collections/contribua';
import { inserirContribua } from './contribua';
import { MissaoCollection } from '../imports/collections/missao';
import { inserirMissao } from './missao';
import { PastoralCollection } from '../imports/collections/pastoral';
import { inserirPastoral } from './pastoral';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername('mosaico')) {
    Accounts.createUser({
      username: "mosaico", 
      email: "ipmosaico@gmail.com", 
      password: "mosaicochurch2019", 
      profile: { 
        igreja: "Igreja Presbiteriana Mosaico",
        idIgreja: 1,
      }
    });
  }
 
  if (AgendasCollection.find().count() === 0) {
    inserirCalendario(1);
  }
  if (LinkAovivo.find().count() === 0) {
    inserirAoVivo(1);
  }
  if (ComunidadesCollection.find().count() === 0) {
    inserirComunidade(1);
  }
  if (ContatoCollection.find().count() === 0) {
    inserirContato(1);
  }
  if (ContribuaCollection.find().count() === 0) {
    inserirContribua(1);
  }
  if (MissaoCollection.find().count() === 0) {
    inserirMissao(1);
  }
  if (PastoralCollection.find().count() === 0) {
    inserirPastoral(1);
  }
});
