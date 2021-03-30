import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { AgendasCollection } from '../api/agendas';

export const Agenda = () => {
  const agendas = useTracker(() => {
    return AgendasCollection.find().fetch();
  });

  return (
    <div>
      <h2>Agenda</h2>
      <ul>{agendas.map(
        agenda => {
          return (
            <li key={agenda._id}>
              <p>{agenda.dia}</p>
              {
                agenda.data.map(dt => {
                  return (
                    <ul>
                      <li>{dt.horario}</li>
                      <li>{dt.atividade}</li>
                    </ul>
                  )
                })
              }
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
