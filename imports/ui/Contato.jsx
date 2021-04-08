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
        item => {
          return (
            <li key={item._id}>
              <img src={item.logo} /> 
              <p>{item.endereco}</p>
              <p>{item.localizacao}</p>
              <p>{item.telefone}</p>
              <p>{item.email}</p>
              <p>{item.missao}</p>
              <p>{item.pastor}</p>
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
