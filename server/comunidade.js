import { ComunidadesCollection } from '../imports/collections/comunidades';

function insertComunidade({ facebook, instagram, whatsapp, youtube, spotify, site, idIgreja }) {
  ComunidadesCollection.insert({ facebook, instagram, whatsapp, youtube, spotify, site, idIgreja, createdAt: new Date() });
}

export function inserirComunidadeMosaico(idIgreja) {
  insertComunidade({
    facebook: 'https://www.facebook.com/igrejapresbiterianamosaico',
    instagram: 'https://www.instagram.com/igrejapresbiterianamosaico/',
    whatsapp: 'https://chat.whatsapp.com/0Yrrxb86FMk1bmN5YttA1N',
    youtube:
      'https://www.youtube.com/channel/UCsYR03W9u4pIOcR4xpXfHqg?sub_confirmation=1',
    spotify:
      'https://open.spotify.com/show/25Ew0LHUkCnAu3nbcXawdw?si=0pxQ6kg9S0K-aYAUmff4yQ',
    site: 'https://igreja-presbiteriana-mosaico.negocio.site/',
    idIgreja
  });
}

export function inserirComunidadeCentral(idIgreja) {
  insertComunidade({
    facebook: 'https://www.facebook.com/IgrejaPresbiterianadeItapetininga/',
    instagram: 'https://www.instagram.com/itapecentral/',
    whatsapp: 'https://wa.me/551532712907',
    youtube:
      'https://www.youtube.com/channel/UCXLB2oYg5tAK-5rHd_d_rGw?sub_confirmation=1',
    // spotify: '',
    site: 'https://itapecentral.com/',
    idIgreja
  });
}
