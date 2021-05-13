import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'pastoral.update': (id, titulo, autor, descricao) => {
    const idIgreja = Meteor.user().profile.idIgreja;

    check(
      titulo,
      Match.Where((titulo) => titulo.length),
    );
    check(
      descricao,
      Match.Where((descricao) => descricao.length),
    );

    PastoralCollection.update(
      { _id: id },
      { titulo, autor, descricao, idIgreja, updatedAt: new Date() },
    );
  },
});

export const PastoralCollection = new Mongo.Collection('pastoral');
