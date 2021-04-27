import { ComunidadesCollection } from '../imports/collections/comunidades';

function insertComunidade({ facebook, instagram, whatsapp, youtube, spotify, site }) {
  ComunidadesCollection.insert({ facebook, instagram, whatsapp, youtube, spotify, site, createdAt: new Date() });
}

export function inserirComunidade() {
  insertComunidade({
    facebook: 'https://www.facebook.com/igrejapresbiterianamosaico',
    instagram: 'https://www.instagram.com/igrejapresbiterianamosaico/',
    whatsapp: 'https://chat.whatsapp.com/0Yrrxb86FMk1bmN5YttA1N',
    youtube:
      'https://www.youtube.com/channel/UCsYR03W9u4pIOcR4xpXfHqg?sub_confirmation=1',
    spotify:
      'https://open.spotify.com/show/25Ew0LHUkCnAu3nbcXawdw?si=0pxQ6kg9S0K-aYAUmff4yQ',
    site: 'https://igreja-presbiteriana-mosaico.negocio.site/',
  });
}
