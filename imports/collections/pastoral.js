import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'pastoral.insert': (titulo, autor, descricao) => {
        check(titulo, Match.Where(titulo => titulo.length));
        check(descricao, Match.Where(descricao => descricao.length));

        PastoralCollection.insert({titulo, autor, descricao, createdAt: new Date()});
    }
})

export const PastoralCollection = new Mongo.Collection('pastoral');
