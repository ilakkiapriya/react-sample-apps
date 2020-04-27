import React from 'react';
import Card from './Card';

const CardList = ({ myfavplaces }) => {
  return (
    <div>
      {
        myfavplaces.map((user, i) => {
          return (
            <Card
              id={myfavplaces[i].id}
              name={myfavplaces[i].name}
              country={myfavplaces[i].country}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;