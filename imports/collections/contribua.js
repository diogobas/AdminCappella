import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';


Meteor.methods({
  'contribua.update': (id, nomeBanco, banco, agencia, cc, operacao, igreja, cnpj) => {
    check(
      nomeBanco,
      Match.Where((nomeBanco) => nomeBanco.length),
    );
    check(
      banco,
      Match.Where((banco) => banco.length),
    );
    check(
      agencia,
      Match.Where((agencia) => agencia.length),
    );
    check(
      cc,
      Match.Where((cc) => cc.length),
    );
    check(
      operacao,
      Match.Where((operacao) => operacao.length),
    );
    check(
      igreja,
      Match.Where((igreja) => igreja.length),
    );
    check(
      igreja,
      Match.Where((igreja) => igreja.length),
    );

    ContribuaCollection.update(
      { _id: id },
      { nomeBanco, banco, agencia, cc, operacao, igreja, cnpj, updatedAt: new Date() },
    );
  },
});

export const ContribuaCollection = new Mongo.Collection('contribua');
