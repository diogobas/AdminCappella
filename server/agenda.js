import { AgendasCollection } from '/imports/collections/agendas';

function insertAgenda({ dia, data, idIgreja }) {
  AgendasCollection.insert({ dia, data, idIgreja, createdAt: new Date() });
}

export function inserirCalendarioMosaico(idIgreja) {
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

export function inserirCalendarioCentral(idIgreja) {
  insertAgenda({
    dia: 'domingo',
    data: [
      {
        atividade: 'escola dominical',
        horario: '09:30',
      },
      {
        atividade: 'culto noturno',
        horario: '19:30',
      },
    ],
    idIgreja
  });
  insertAgenda({
    dia: 'segunda',
    data: [],
    idIgreja
  });
  insertAgenda({
    dia: 'terça',
    data: [],
    idIgreja
  });
  insertAgenda({
    dia: 'quarta',
    data: [],
    idIgreja
  });
  insertAgenda({
    dia: 'quinta',
    data: [
      {
        atividade: 'estudo bíblico',
        horario: '19:30',
      },
    ],
    idIgreja
  });
  insertAgenda({
    dia: 'sexta',
    data: [
      {
        atividade: 'pequeno grupo - adolescentes',
        horario: '19:30',
      }
    ],
    idIgreja
  });
  insertAgenda({
    dia: 'sabado',
    data: [
      {
        atividade: 'culto noturno',
        horario: '19:30',
      }
    ],
    idIgreja
  });
}
