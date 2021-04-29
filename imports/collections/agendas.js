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
    'agenda.update': (id, dia, horario, atividade) => {
        check(dia, Match.Where(dia => dia.length));
        check(horario, Match.Where(horario => horario.length));
        check(atividade, Match.Where(atividade => atividade.length));

        const data = [{
            atividade,
            horario,
        }];

        AgendasCollection.update(
            { _id: id },
            { dia, data, updatedAt: new Date() },
        );
    },
    'agenda.delete': (id) => AgendasCollection.remove({ _id: id }),
})

export const AgendasCollection = new Mongo.Collection('agendas');
