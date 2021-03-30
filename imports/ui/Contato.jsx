import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ContatoCollection } from '../api/contato';

export const Contato = () => {
  const contato = useTracker(() => {
    return ContatoCollection.find().fetch();
  });

  return (
    <div>
      <h2>Contato</h2>
      <ul>{contato.map(
        con => {
          return (
            <li key={con._id}>
              <img src={con.logo} /> 
              <p>{con.endereco}</p>
              <p>{con.localizacao}</p>
              <p>{con.telefone}</p>
              <p>{con.email}</p>
              <p>{con.missao}</p>
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
