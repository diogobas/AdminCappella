import { MissaoCollection } from '../imports/api/missao';
import {
  BEIGE,
  DARKBEIGE,
  GREEN,
  DARKGREEN,
  LIGHTTITLE,
} from '../imports/styles/styles';

function insertMissao({ nome, missao, contato, backgroundColor  }) {
  MissaoCollection.insert({nome, missao, contato, backgroundColor, createdAt: new Date()});
}

export function inserirMissao() {
    insertMissao({
      nome: 'Pastor Roberto',
      missao: 'Missão Cidade de Deus / Carvalhos de Justiça',
      backgroundColor: BEIGE,
    });

    insertMissao({
      nome: 'Sherydan',
      missao: 'Missão Resgate da Paz',
      contato: '+55 62 9209-3241',
      backgroundColor: DARKBEIGE,
    });

    insertMissao({
      nome: 'I. S.',
      missao: 'Missão Pluripovos',
      backgroundColor: GREEN,
    });

    insertMissao({
      nome: 'M. S.',
      missao: 'Missão Amigos dos Ciganos',
      backgroundColor: DARKGREEN,
    });

    insertMissao({
      nome: 'Mateus e Aline',
      missao: 'Missão Novas Tribos / Índios Waiãpi',
      contato: '96 981250053 / 96 35991558617',
      backgroundColor: LIGHTTITLE,
    });

    insertMissao({
      nome: 'E. S.',
      missao: 'Interserve Norte da África',
      backgroundColor: '#A4D5DC',
    });

    insertMissao({
      nome: 'Pastor Luciano Pires',
      missao: 'Portugal',
      contato: '+ 351 (911) 850 940',
      backgroundColor: '#BBE0E4',
    });

    insertMissao({
      nome: 'Paulo Ricardo',
      contato: '+1 (314) 793 7770',
      backgroundColor: BEIGE,
    });
}
