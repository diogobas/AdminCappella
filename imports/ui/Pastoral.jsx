import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { PastoralCollection } from '../api/pastoral';

export const Pastoral = () => {
  const pastoral = useTracker(() => {
    return PastoralCollection.find().fetch();
  });

  return (
    <div>
      <h2>Pastoral</h2>
      <ul>{pastoral.map(
        pas => {
          return (
            <li key={pas._id}>
              <p>{pas.titulo}</p>
              <p>{pas.autor}</p>
              <p>{pas.descricao}</p>
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
