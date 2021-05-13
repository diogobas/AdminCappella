import { ContatoCollection } from '/imports/collections/contato';

function insertContato({
  endereco,
  localizacao,
  telefone,
  email,
  missao,
  pastor,
  idIgreja
}) {
  ContatoCollection.insert({
    endereco,
    localizacao,
    telefone,
    email,
    missao,
    pastor,
    idIgreja,
    createdAt: new Date(),
  });
}

export function inserirContatoMosaico(idIgreja) {
  insertContato({
    endereco: 'Rua T-53, 480 Setor Bueno Goiânia/GO, CEP 74810-210',
    localizacao: 'https://goo.gl/maps/ZNohNYBc6XSaP9nf9',
    telefone: '(62) 99161 6086',
    email: 'ipmosaico@gmail.com',
    missao:
      'A Igreja Presbiteriana Mosaico existe para acolher pessoas e formar discípulos de Cristo através de relacionamentos saudáveis e uma pregação bíblica contemporânea no bairro Setor Bueno, na cidade de Goiânia e no mundo.',
    pastor: 'Rev. Felipe Lobo Andrade',
    idIgreja,
  });
}

export function inserirContatoCentral(idIgreja) {
  insertContato({
    endereco: 'Rua Monsenhor Soares 680, Itapetininga - São Paulo, CEP 18200-009',
    localizacao: 'https://goo.gl/maps/kyk67ZH6kn6eznZ1A',
    telefone: '(15) 3271 2907',
    email: 'ipbitapecentral@gmail.com',
    missao:
      'Porque Deus AMOU o MUNDO de tal maneira que deu o seu FILHO unigênito, para que todo aquele que nele crê NÃO PEREÇA, mas tenha a VIDA ETERNA. João 3.16',
    pastor: 'Rev. Rafael Corrêa Batista',
    idIgreja,
  });
}
