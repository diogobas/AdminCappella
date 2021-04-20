import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { PastoralCollection } from '../collections/pastoral';

export const PastoralList = () => {
  const pastoral = useTracker(() => {
    return PastoralCollection.find().fetch();
  });

  const renderPastorais = () => {
    return pastoral.map((past) => {
        const { titulo, autor} = past;
        return (
            <tr key={titulo}>
                <td>{titulo}</td>
                <td>{autor}</td>
            </tr>
        )
    })
  };

  return (
   <table className="table">
       <thead>
           <tr>
               <th>Titulo</th>
               <th>Autor</th>
           </tr>
       </thead>
       <tbody>
           {renderPastorais()}
       </tbody>
   </table>
  );
};
