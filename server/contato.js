import { ContatoCollection } from '/imports/collections/contato';

function insertContato({
  logo,
  endereco,
  localizacao,
  telefone,
  email,
  missao,
  pastor,
}) {
  ContatoCollection.insert({
    logo,
    endereco,
    localizacao,
    telefone,
    email,
    missao,
    pastor,
    createdAt: new Date(),
  });
}

export function inserirContato() {
  insertContato({
    logo: '../assets/images/mosaico.png',
    endereco: 'Rua T-53, 480 Setor Bueno Goiânia/GO, CEP 74810-210',
    localizacao: 'https://goo.gl/maps/ZNohNYBc6XSaP9nf9',
    telefone: '(62) 99161 6086',
    email: 'ipmosaico@gmail.com',
    missao:
      'A Igreja Presbiteriana Mosaico existe para acolher pessoas e formar discípulos de Cristo através de relacionamentos saudáveis e uma pregação bíblica contemporânea no bairro Setor Bueno, na cidade de Goiânia e no mundo.',
    pastor: 'Rev. Felipe Lobo Andrade',
  });
}
