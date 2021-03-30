import { Meteor } from 'meteor/meteor';
import { AgendasCollection } from '/imports/api/agendas';
import { LinkAovivo } from '../imports/api/linkAovivo';
import { inserirCalendario } from './agenda';
import { inserirAoVivo } from './aovivo';

Meteor.startup(() => {
  if (AgendasCollection.find().count() === 0) {
    inserirCalendario();
  }
  if (LinkAovivo.find().count() === 0) {
    inserirAoVivo();
  }
});
