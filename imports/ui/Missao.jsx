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
        mis => {
          return (
            <li key={mis._id}>
              <p>{mis.nome}</p>
              <p>{mis.missao}</p>
              <p>{mis.contato}</p>
              <p>{mis.backgroundColor}</p>
            </li>
          )
        }
      )}</ul>
    </div>
  );
};
