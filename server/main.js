import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { AgendasCollection } from '/imports/collections/agendas';
import { LinkAovivo } from '../imports/collections/linkAovivo';
import { inserirCalendarioMosaico, inserirCalendarioCentral } from './agenda';
import { inserirAoVivoMosaico, inserirAoVivoCentral } from './aovivo';
import { ComunidadesCollection } from '../imports/collections/comunidades';
import { inserirComunidadeMosaico, inserirComunidadeCentral } from './comunidade';
import { ContatoCollection } from '../imports/collections/contato';
import { inserirContatoMosaico, inserirContatoCentral } from './contato';
import { ContribuaCollection } from '../imports/collections/contribua';
import { inserirContribuaMosaico, inserirContribuaCentral } from './contribua';
import { MissaoCollection } from '../imports/collections/missao';
import { inserirMissaoMosaico, inserirMissaoCentral } from './missao';
import { PastoralCollection } from '../imports/collections/pastoral';
import { inserirPastoralMosaico, inserirPastoralCentral } from './pastoral';

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

  if (!Accounts.findUserByUsername('central')) {
    Accounts.createUser({
      username: "central", 
      email: "ipbitapecentral@gmail.com", 
      password: "ipbitapecentralchurch2021", 
      profile: { 
        igreja: "Igreja Presbiteriana de Itapetininga",
        idIgreja: 2,
      }
    });
  }
 
  if (AgendasCollection.find().count() === 0) {
    inserirCalendarioMosaico(1);
  }
  if (AgendasCollection.find({idIgreja: 2}).count() === 0) {
    inserirCalendarioCentral(2);
  }

  if (LinkAovivo.find().count() === 0) {
    inserirAoVivoMosaico(1);
  }
  if (LinkAovivo.find({idIgreja: 2}).count() === 0) {
    inserirAoVivoCentral(2);
  }

  if (ComunidadesCollection.find().count() === 0) {
    inserirComunidadeMosaico(1);
  }
  if (ComunidadesCollection.find({idIgreja: 2}).count() === 0) {
    inserirComunidadeCentral(2);
  }

  if (ContatoCollection.find().count() === 0) {
    inserirContatoMosaico(1);
  }
  if (ContatoCollection.find({idIgreja: 2}).count() === 0) {
    inserirContatoCentral(2);
  }
  
  if (ContribuaCollection.find().count() === 0) {
    inserirContribuaMosaico(1);
  }
  if (ContribuaCollection.find({idIgreja: 2}).count() === 0) {
    inserirContribuaCentral(2);
  }

  if (MissaoCollection.find().count() === 0) {
    inserirMissaoMosaico(1);
  }
  if (MissaoCollection.find({idIgreja: 2}).count() === 0) {
    inserirMissaoCentral(2);
  }

  if (PastoralCollection.find().count() === 0) {
    inserirPastoralMosaico(1);
  }
  if (PastoralCollection.find({idIgreja: 2}).count() === 0) {
    inserirPastoralCentral(2);
  }
});
