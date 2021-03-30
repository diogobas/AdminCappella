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
        com => {
          return (
            <li key={com._id}>
              <p>{com.media}</p>
              <p>{com.url}</p>
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
