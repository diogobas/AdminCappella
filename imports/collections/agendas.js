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
    },
    'agenda.update': (id, dia, data) => {
        check(dia, Match.Where(dia => dia.length));

        data.map((dt) => {
            check(dt.horario, Match.Where(horario => horario.length));
            check(dt.atividade, Match.Where(atividade => atividade.length));
        });

        AgendasCollection.update(
            { _id: id },
            { dia, data, updatedAt: new Date() },
        );
    },
})

export const AgendasCollection = new Mongo.Collection('agendas');
