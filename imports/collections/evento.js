import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'evento.insert': (titulo, sobre, dataInicial, dataFim,valor, local, endereco, imagemURL, url) => {
    const idIgreja = Meteor.user().profile.idIgreja;

    check(titulo, Match.Where(titulo => titulo.length));

    EventoCollection.insert({ titulo, sobre, dataInicial, dataFim, valor, local, endereco, imagemURL, url, idIgreja, createdAt: new Date() });
  },
  'evento.update': (id, titulo, sobre, dataInicial, dataFim, valor, local, endereco, imagemURL, url) => {
        const idIgreja = Meteor.user().profile.idIgreja;

        check(titulo, Match.Where(titulo => titulo.length));

        EventoCollection.update(
            { _id: id },
            { titulo, sobre, dataInicial, dataFim, valor, local, endereco, imagemURL, url, idIgreja, updatedAt: new Date() },
        );
    },
    'evento.delete': (id) => EventoCollection.remove({ _id: id }),
});

export const EventoCollection = new Mongo.Collection('evento');
