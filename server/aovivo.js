import { LinkAovivo } from '/imports/collections/linkAovivo';

function insertAoVivo({ url }) {
  LinkAovivo.insert({ url, createdAt: new Date() });
}

export function inserirAoVivo() {
  insertAoVivo({
    url: 'https://www.youtube.com/channel/UCsYR03W9u4pIOcR4xpXfHqg',
  });
}
