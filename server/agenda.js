import { AgendasCollection } from '/imports/collections/agendas';

function insertAgenda({ dia, data, idIgreja }) {
  AgendasCollection.insert({ dia, data, idIgreja, createdAt: new Date() });
}

export function inserirCalendario(idIgreja) {
  insertAgenda({
    dia: 'domingo',
    data: [
      {
        atividade: 'escola dominical',
        horario: '10:00',
      },
      {
        atividade: 'culto noturno',
        horario: '19:00',
      },
    ],
    idIgreja
  });
  insertAgenda({
    dia: 'segunda',
    data: [
      {
        atividade: 'ensaio do coral',
        horario: '20:00',
      },
    ],
    idIgreja
  });
  insertAgenda({
    dia: 'terça',
    data: [
      {
        atividade: 'reunião dos jovens',
        horario: '20:00',
      },
    ],
    idIgreja
  });
  insertAgenda({
    dia: 'quarta',
    data: [
      {
        atividade: 'estudo bíblico reunião de oração',
        horario: '20:00',
      },
    ],
    idIgreja
  });
  insertAgenda({
    dia: 'quinta',
    data: [],
    idIgreja
  });
  insertAgenda({
    dia: 'sexta',
    data: [],
    idIgreja
  });
  insertAgenda({
    dia: 'sabado',
    data: [],
    idIgreja
  });
}
