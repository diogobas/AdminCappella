import { LinkAovivo } from '/imports/collections/linkAovivo';

function insertAoVivo({ url, idIgreja }) {
  LinkAovivo.insert({ url, idIgreja, createdAt: new Date() });
}

export function inserirAoVivoMosaico(idIgreja) {
  insertAoVivo({
    url: 'https://www.youtube.com/channel/UCsYR03W9u4pIOcR4xpXfHqg',
    idIgreja
  });
}

export function inserirAoVivoCentral(idIgreja) {
  insertAoVivo({
    url: 'https://www.youtube.com/channel/UCXLB2oYg5tAK-5rHd_d_rGw',
    idIgreja
  });
}

