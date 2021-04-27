import { ComunidadesCollection } from '../imports/collections/comunidades';
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function insertComunidade({ url, icon }) {
  ComunidadesCollection.insert({ url, icon, createdAt: new Date() });
}

export function inserirComunidade() {
  insertComunidade({
    url: 'https://www.facebook.com/igrejapresbiterianamosaico',
    icon: faFacebook,
  });

  insertComunidade({
    url: 'https://www.instagram.com/igrejapresbiterianamosaico/',
    icon: faInstagram,
  });

  insertComunidade({
    url: 'https://chat.whatsapp.com/0Yrrxb86FMk1bmN5YttA1N',
    icon: faWhatsapp,
  });

  insertComunidade({
    url:
      'https://www.youtube.com/channel/UCsYR03W9u4pIOcR4xpXfHqg?sub_confirmation=1',
    icon: faYoutube,
  });

  insertComunidade({
    url:
      'https://open.spotify.com/show/25Ew0LHUkCnAu3nbcXawdw?si=0pxQ6kg9S0K-aYAUmff4yQ',
    icon: faSpotify,
  });

  insertComunidade({
    url: 'https://igreja-presbiteriana-mosaico.negocio.site/',
    icon: '../imports/assets/images/mosaicoLogo.png',
  });
}
