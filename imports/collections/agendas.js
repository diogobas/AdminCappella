import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'agenda.insert': (dia, horario, atividade) => {
        check(dia, Match.Where(dia => dia.length));
        check(horario, Match.Where(horario => horario.length));
        check(atividade, Match.Where(atividade => atividade.length));

        const data = [{
            atividade,
            horario,
        }];

        AgendasCollection.insert({ dia, data, createdAt: new Date() });
    }
})

export const AgendasCollection = new Mongo.Collection('agendas');
