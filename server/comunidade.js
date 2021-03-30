import { ComunidadesCollection } from '../imports/api/comunidades';

function insertComunidade({ media, url, text  }) {
  ComunidadesCollection.insert({media, url, text, createdAt: new Date()});
}

export function inserirComunidade() {
    insertComunidade({
      media: 'facebook',
      url: 'https://www.facebook.com/igrejapresbiterianamosaico',
      text: 'facebook',
    });

    insertComunidade({
      media: 'instagram',
      url: 'https://www.instagram.com/igrejapresbiterianamosaico/',
      text: 'instagram',
    });

    insertComunidade({
      media: 'whatsapp',
      url: 'https://chat.whatsapp.com/0Yrrxb86FMk1bmN5YttA1N',
      text: 'whatsapp',
    });

    insertComunidade({
      media: 'youtube',
      url:
        'https://www.youtube.com/channel/UCsYR03W9u4pIOcR4xpXfHqg?sub_confirmation=1',
      text: 'youtube',
    });

    insertComunidade({
      media: 'spotify',
      url:
        'https://open.spotify.com/show/25Ew0LHUkCnAu3nbcXawdw?si=0pxQ6kg9S0K-aYAUmff4yQ',
      text: 'spotify',
    });

    insertComunidade({
      media: 'site',
      url: 'https://igreja-presbiteriana-mosaico.negocio.site/',
      text: 'site',
    });
}
