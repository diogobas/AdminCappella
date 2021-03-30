import { Meteor } from 'meteor/meteor';
import { inserirCalendario } from './agenda';
import { AgendasCollection } from '/imports/api/agendas';

Meteor.startup(() => {
  if (AgendasCollection.find().count() === 0) {
    inserirCalendario();
  }
});
