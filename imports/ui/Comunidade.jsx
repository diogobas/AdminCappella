import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ComunidadesCollection } from '../api/comunidades';

export const Comunidade = () => {
  const comunidades = useTracker(() => {
    return ComunidadesCollection.find().fetch();
  });

  return (
    <div>
      <h2>Comunidade</h2>
      <ul>{comunidades.map(
        item => {
          return (
            <li key={item._id}>
              <p>{item.media}</p>
              <p>{item.url}</p>
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
