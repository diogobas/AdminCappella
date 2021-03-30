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
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.url}</a>
        </li>
      )}</ul>
    </div>
  );
};
