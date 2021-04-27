import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'missao.insert': (nome, missao, contato) => {
        check(nome, Match.Where(nome => nome.length));
        check(missao, Match.Where(missao => missao.length));
        check(contato, Match.Where(contato => contato.length));

        MissaoCollection.insert({nome, missao, contato, createdAt: new Date()});
    }
})

export const MissaoCollection = new Mongo.Collection('missao');
