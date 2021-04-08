import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { MissaoCollection } from '../api/missao';

export const Missao = () => {
  const missao = useTracker(() => {
    return MissaoCollection.find().fetch();
  });

  return (
    <div>
      <h2>Missao</h2>
      <ul>{missao.map(
        item => {
          return (
            <li key={item._id}>
              <p>{item.nome}</p>
              <p>{item.missao}</p>
              <p>{item.contato}</p>
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
