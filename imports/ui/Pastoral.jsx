import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { PastoralCollection } from '../collections/pastoral';

export const Pastoral = () => {
  const pastoral = useTracker(() => {
    return PastoralCollection.find().fetch();
  });

  return (
    <div>
      <h2>Pastoral</h2>
      <ul>{pastoral.map(
        item => {
          return (
            <li key={item._id}>
              <p>{item.titulo}</p>
              <p>{item.autor}</p>
              <p>{item.descricao}</p>
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
