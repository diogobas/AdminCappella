import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'comunidades.update': (id, facebook, instagram, whatsapp, youtube, spotify, site) => {
    const idIgreja = Meteor.user().profile.idIgreja;

    ComunidadesCollection.update(
      { _id: id },
      { facebook, instagram, whatsapp, youtube, spotify, site, idIgreja, updatedAt: new Date() },
    );
  },
});

export const ComunidadesCollection = new Mongo.Collection('comunidades');
