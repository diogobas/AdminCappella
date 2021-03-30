import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinkAovivo } from '../api/linkAovivo';

export const AoVivo = () => {
  const linkAovivo = useTracker(() => {
    return LinkAovivo.find().fetch();
  });

  return (
    <div>
      <h2>Ao Vivo</h2>
      <ul>{linkAovivo.map(
        item => <li key={item._id}>
          <a href={item.url} target="_blank">{item.url}</a>
        </li>
      )}</ul>
    </div>
  );
};
