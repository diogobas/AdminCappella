import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ContribuaCollection } from '../api/contribua';

export const Contribua = () => {
  const contato = useTracker(() => {
    return ContribuaCollection.find().fetch();
  });

  return (
    <div>
      <h2>Contribua</h2>
      <ul>{contato.map(
        item => {
          return (
            <li key={item._id}>
              <p>{item.nomeBanco}</p>
              <p>{item.banco}</p>
              <p>{item.agencia}</p>
              <p>{item.cc}</p>
              <p>{item.operacao}</p>
              <p>{item.igreja}</p>
              <p>{item.cnpj}</p>
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
