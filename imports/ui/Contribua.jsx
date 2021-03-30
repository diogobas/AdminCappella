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
        con => {
          return (
            <li key={con._id}>
              <p>{con.nomeBanco}</p>
              <p>{con.banco}</p>
              <p>{con.agencia}</p>
              <p>{con.cc}</p>
              <p>{con.operacao}</p>
              <p>{con.igreja}</p>
              <p>{con.cnpj}</p>
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
