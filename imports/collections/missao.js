import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'missao.insert': (nome, missao, contato) => {
        const idIgreja = Meteor.user().profile.idIgreja;

        check(nome, Match.Where(nome => nome.length));

        MissaoCollection.insert({nome, missao, contato, idIgreja, createdAt: new Date()});
    },
    'missao.update': (id, nome, missao, contato) => {
        const idIgreja = Meteor.user().profile.idIgreja;

        check(nome, Match.Where(nome => nome.length));

        MissaoCollection.update(
            { _id: id },
            { nome, missao, contato, idIgreja, updatedAt: new Date() },
        );
    },
    'missao.delete': (id) => MissaoCollection.remove({ _id: id }),
})

export const MissaoCollection = new Mongo.Collection('missao');
