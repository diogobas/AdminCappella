import { ContribuaCollection } from '/imports/collections/contribua';

function insertContribua({
  nomeBanco,
  banco,
  agencia,
  cc,
  operacao,
  igreja,
  cnpj,
  idIgreja
}) {
  ContribuaCollection.insert({
    nomeBanco,
    banco,
    agencia,
    cc,
    operacao,
    igreja,
    cnpj,
    idIgreja,
    createdAt: new Date(),
  });
}

export function inserirContribuaMosaico(idIgreja) {
  insertContribua({
    nomeBanco: 'CAIXA ECONOMICA FEDERAL',
    banco: 'Banco 104',
    agencia: 'Agência 0996',
    cc: 'C/C 3211-6',
    operacao: 'Operação 003',
    igreja: 'igreja presbiteriana mosaico',
    cnpj: '22.289.452/0001-78',
    idIgreja
  });
}

export function inserirContribuaCentral(idIgreja) {
  insertContribua({
    nomeBanco: 'LOREM IPSUM',
    banco: 'Banco 123',
    agencia: 'Agência 1234',
    cc: 'C/C 1234-1',
    operacao: 'Operação 123',
    igreja: 'igreja presbiteriana de itapetininga',
    cnpj: '12.345.678/0001-90',
    idIgreja
  });
}
