import { MissaoCollection } from '../imports/collections/missao';

function insertMissao({ nome, missao, contato, idIgreja }) {
  MissaoCollection.insert({ nome, missao, contato, idIgreja, createdAt: new Date() });
}

export function inserirMissao(idIgreja) {
  insertMissao({
    nome: 'Pastor Roberto',
    missao: 'Missão Cidade de Deus / Carvalhos de Justiça',
    idIgreja
  });

  insertMissao({
    nome: 'Sherydan',
    missao: 'Missão Resgate da Paz',
    contato: '+55 62 9209-3241',
    idIgreja
  });

  insertMissao({
    nome: 'I. S.',
    missao: 'Missão Pluripovos',
    idIgreja
  });

  insertMissao({
    nome: 'M. S.',
    missao: 'Missão Amigos dos Ciganos',
    idIgreja
  });

  insertMissao({
    nome: 'Mateus e Aline',
    missao: 'Missão Novas Tribos / Índios Waiãpi',
    contato: '96 981250053 / 96 35991558617',
    idIgreja
  });

  insertMissao({
    nome: 'E. S.',
    missao: 'Interserve Norte da África',
    idIgreja
  });

  insertMissao({
    nome: 'Pastor Luciano Pires',
    missao: 'Portugal',
    contato: '+ 351 (911) 850 940',
    idIgreja
  });

  insertMissao({
    nome: 'Paulo Ricardo',
    contato: '+1 (314) 793 7770',
    idIgreja
  });
}
