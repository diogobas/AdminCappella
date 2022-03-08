import { EventoCollection } from '/imports/collections/evento';

function insertEvento({ titulo, sobre, dataInicial, dataFim,valor, local, endereco, imagemURL, url, idIgreja }) {
  EventoCollection.insert({ titulo,sobre, dataInicial, dataFim,valor, local, endereco, imagemURL, url, idIgreja, createdAt: new Date() });
}

export function inserirEvento(idIgreja) {
  insertEvento({
    titulo: 'acampamento',
    sobre: 'A Igreja Presbiteriana Mosaico existe para acolher pessoas e formar discípulos de Cristo através de relacionamentos saudáveis e uma pregação bíblica contemporânea no bairro Setor Bueno, na cidade de Goiânia e no mundo',
    dataInicial: new Date(2021, 12, 8, 20, 0),
    dataFim: new Date(2021, 12, 8),
    valor: 'R$ 15,00 adulto R$ 10,00 até 12 anos',
    local: 'Na Igreja Presbiteriana Mosaico',
    endereco: 'Rua T-53, 480, Setor Bueno Goiânia/Go - Cep 74810-210',
    imagemURL: 'https://reactjs.org/logo-og.png',
    url: 'https://www.youtube.com/channel/UCsYR03W9u4pIOcR4xpXfHqg',
    idIgreja
  });
}
