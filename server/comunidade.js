import { ComunidadesCollection } from '../imports/api/comunidades';
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function insertComunidade({ media, url, text, icon  }) {
  ComunidadesCollection.insert({media, url, text, icon, createdAt: new Date()});
}

export function inserirComunidade() {
    insertComunidade({
      media: 'facebook',
      url: 'https://www.facebook.com/igrejapresbiterianamosaico',
      text: 'facebook',
      icon: faFacebook,
    });

    insertComunidade({
      media: 'instagram',
      url: 'https://www.instagram.com/igrejapresbiterianamosaico/',
      text: 'instagram',
      icon: faInstagram,
    });

    insertComunidade({
      media: 'whatsapp',
      url: 'https://chat.whatsapp.com/0Yrrxb86FMk1bmN5YttA1N',
      text: 'whatsapp',
      icon: faWhatsapp,
    });

    insertComunidade({
      media: 'youtube',
      url:
        'https://www.youtube.com/channel/UCsYR03W9u4pIOcR4xpXfHqg?sub_confirmation=1',
      text: 'youtube',
      icon: faYoutube,
    });

    insertComunidade({
      media: 'spotify',
      url:
        'https://open.spotify.com/show/25Ew0LHUkCnAu3nbcXawdw?si=0pxQ6kg9S0K-aYAUmff4yQ',
      text: 'spotify',
      icon: faSpotify,
    });

    insertComunidade({
      media: 'site',
      url: 'https://igreja-presbiteriana-mosaico.negocio.site/',
      text: 'site',
      icon: '../imports/assets/images/mosaicoLogo.png',
    });
}
