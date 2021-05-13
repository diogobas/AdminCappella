import { LinkAovivo } from '/imports/collections/linkAovivo';

function insertAoVivo({ url, idIgreja }) {
  LinkAovivo.insert({ url, idIgreja, createdAt: new Date() });
}

export function inserirAoVivo(idIgreja) {
  insertAoVivo({
    url: 'https://www.youtube.com/channel/UCsYR03W9u4pIOcR4xpXfHqg',
    idIgreja
  });
}
