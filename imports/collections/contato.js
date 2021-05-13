import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'contato.update': (id, endereco, localizacao, telefone, email, missao, pastor) => {
    const idIgreja = Meteor.user().profile.idIgreja;

    check(
      endereco,
      Match.Where((titulo) => titulo.length),
    );
    check(
      localizacao,
      Match.Where((descricao) => descricao.length),
    );
    check(
      telefone,
      Match.Where((descricao) => descricao.length),
    );
    check(
      email,
      Match.Where((descricao) => descricao.length),
    );
    check(
      pastor,
      Match.Where((descricao) => descricao.length),
    );

    ContatoCollection.update(
      { _id: id },
      { endereco, localizacao, telefone, email, missao, pastor, idIgreja, updatedAt: new Date() },
    );
  },
});

export const ContatoCollection = new Mongo.Collection('contato');
