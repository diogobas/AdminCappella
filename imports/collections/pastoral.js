import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { sendPush } from "../infra/sendPush";

Meteor.methods({
  'pastoral.update': (id, titulo, autor, descricao) => {
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
      { titulo, autor, descricao, updatedAt: new Date() },
    );
  },

  'pastoral.notificar': (titulo, autor) => {
    console.debug('pastoral.notificar', {
      titulo,
      autor
    });
    sendPush({
      heading: 'Nova Pastoral: ' + titulo,
      content: 'por: ' + autor
    }).then(() => {
      console.info('Mensagem enviada com sucesso');
    }).catch(e => {
      console.error('Error enviando mensagem', {e})
    })
  }
});

export const PastoralCollection = new Mongo.Collection('pastoral');
