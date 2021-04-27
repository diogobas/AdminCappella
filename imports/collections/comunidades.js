import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'comunidades.update': (id, facebook, instagram, whatsapp, youtube, spotify, site) => {

    ComunidadesCollection.update(
      { _id: id },
      { facebook, instagram, whatsapp, youtube, spotify, site, updatedAt: new Date() },
    );
  },
});

export const ComunidadesCollection = new Mongo.Collection('comunidades');
