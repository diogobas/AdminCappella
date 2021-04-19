import { AgendasCollection } from '/imports/collections/agendas';

function insertAgenda({ dia, data }) {
  AgendasCollection.insert({dia, data, createdAt: new Date()});
}

export function inserirCalendario() {
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
        }
      ]
    })
    insertAgenda({
      dia: 'segunda',
      data: [
        {
          atividade: 'ensaio do coral',
          horario: '20:00',
        },
      ]
    });
    insertAgenda({
      dia: 'terça',
      data: [
        {
          atividade: 'reunião dos jovens',
          horario: '20:00',
        },
      ]
    });
    insertAgenda({
      dia: 'quarta',
      data: [
        {
          atividade: 'estudo bíblico reunião de oração',
          horario: '20:00',
        },
      ]
    });
}


