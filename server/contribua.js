import { ContribuaCollection } from '/imports/collections/contribua';

function insertContribua({
  nomeBanco,
  banco,
  agencia,
  cc,
  operacao,
  igreja,
  cnpj,
}) {
  ContribuaCollection.insert({
    nomeBanco,
    banco,
    agencia,
    cc,
    operacao,
    igreja,
    cnpj,
    createdAt: new Date(),
  });
}

export function inserirContribua() {
  insertContribua({
    nomeBanco: 'CAIXA ECONOMICA FEDERAL',
    banco: 'Banco 104',
    agencia: 'Agência 0996',
    cc: 'C/C 3211-6',
    operacao: 'Operação 003',
    igreja: 'igreja presbiteriana mosaico',
    cnpj: '22.289.452/0001-78',
  });
}
