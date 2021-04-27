import { MissaoCollection } from '../imports/collections/missao';

function insertMissao({ nome, missao, contato }) {
  MissaoCollection.insert({ nome, missao, contato, createdAt: new Date() });
}

export function inserirMissao() {
  insertMissao({
    nome: 'Pastor Roberto',
    missao: 'Missão Cidade de Deus / Carvalhos de Justiça',
  });

  insertMissao({
    nome: 'Sherydan',
    missao: 'Missão Resgate da Paz',
    contato: '+55 62 9209-3241',
  });

  insertMissao({
    nome: 'I. S.',
    missao: 'Missão Pluripovos',
  });

  insertMissao({
    nome: 'M. S.',
    missao: 'Missão Amigos dos Ciganos',
  });

  insertMissao({
    nome: 'Mateus e Aline',
    missao: 'Missão Novas Tribos / Índios Waiãpi',
    contato: '96 981250053 / 96 35991558617',
  });

  insertMissao({
    nome: 'E. S.',
    missao: 'Interserve Norte da África',
  });

  insertMissao({
    nome: 'Pastor Luciano Pires',
    missao: 'Portugal',
    contato: '+ 351 (911) 850 940',
  });

  insertMissao({
    nome: 'Paulo Ricardo',
    contato: '+1 (314) 793 7770',
  });
}
