import { PastoralCollection } from '../imports/collections/pastoral';

function insertPastoral({ titulo, autor, descricao, idIgreja }) {
  PastoralCollection.insert({
    titulo,
    autor,
    descricao,
    idIgreja,
    createdAt: new Date(),
  });
}

export function inserirPastoralMosaico(idIgreja) {
  insertPastoral({
    titulo: 'BEM VINDO!',
    autor: 'Felipe Lobo Andrade',
    descricao: `É com grande alegria que damos boas vindas ao Aplicativo da Igreja Presbiteriana Mosaico. Somos muito gratos a Deus por mais uma ferramenta na propagação do evangelho e na edificação da igreja de Jesus.

      Essa é a primeira versão do nosso aplicativo, sabemos que aos poucos vamos melhorando e aumentando as ferramentas por aqui cada vez mais. O intuito do nosso aplicativo não é outro senão usarmos de todo artifício em nossas mãos para que o evangelho seja conhecido, para que a comunidade seja edificada e para que os irmãos estejam sempre em comunhão.

      Através dessa plataforma você terá acesso à mensagens pastorais, comunicados importantes, links rápidos para YouTube, Facebook, Instagram, Whatsapp, etc. Você também pode entrar em contato conosco e diretamente com nosso pastor!

      A Palavra de Deus em Romanos 14.19 diz: “Por isso, esforcemo-nos em promover tudo quanto conduz à paz e à edificação mútua.” É justamente nesse propósito que nosso aplicativo foi criado, para ser canal de edificação, de paz, de comunhão e de evangelização.

      Que Deus te abençoe!`,
    idIgreja
  });
}

export function inserirPastoralCentral(idIgreja) {
  insertPastoral({
    titulo: 'O DIA QUE A MORTE MORREU',
    autor: 'Rafael Corrêa Batista',
    descricao: `A Páscoa é a data mais importante do calendário cristão, é também a data mais importante do calendário judaico. Ao contrário do que se pensa o Natal não é tão importante quanto a Páscoa. Todos os evangelhos tem como ponto central o acontecimento que será rememorado no próximo dia 04, e a vida de Jesus Cristo tem somente um propósito, sua morte.

      Esta foi a missão que Deus deu a Jesus. Jesus é a demonstração real do amor de Deus, que é levado as últimas consequências quando ele humilha e sacrifica seu próprio filho.

      Mas por que Deus teve que fazer isso para demonstrar seu amor por nós?

      Porque Deus não volta atrás em sua palavra e sua justiça precisa ser executada. Ao contrário da frouxa e débil justiça humana, Deus não falha. Desta forma a humanidade se tornou ré da justiça de Deus, e somente um veredicto e uma pena são possíveis a todo ser humano: a morte, a total e eterna separação de Deus em sofrimento.

      É a morte que assola o homem durante toda a sua existência. O desespero, o medo são frutos do consciente destino que desconstrói toda possibilidade de futuro de nosso ser. A morte é a consequência de nossa condição, inimigos de Deus, e porque morremos não há esperança na humanidade.

      Por mais que o homem viva durante algum tempo em êxtase pela observação e contemplação das belezas e prazeres da vida, ele voltará a escuridão e a depressão advindas da morte. A única forma de vencer esta batalha é se livrar da justa ira de Deus! O que infelizmente é algo impossível, pois Deus é eterno e o homem voltará ao pó. Todos sabemos que vamos morrer.

      Mas porque Deus amou o seu povo, enviou o seu Filho, o ser eterno, para se fazer carne, habitar entre nós, e morrer a nossa morte, sofrendo em si a ira eterna de seu próprio Pai. A Páscoa nos lembra da liberdade do destino que estava ligado a nós. A morte foi vencida, pois aquele que segue a Jesus, foi com ele para cruz e já morreu!

      O inimigo já foi vencido, a justiça foi satisfeita, e a morte morreu para todo aquele que crê. Lembre-se e não esconda isso, mesmo que você passe algum tempo na escuridão dessa vida, quando seguir Jesus, ao terceiro dia você ressuscitará.

      Feliz Páscoa, o dia que a morte morreu!`,
    idIgreja
  });
}
