import React from 'react';

const Card = (props) => {
  return (
    <div className='tc grow bg-washed-red br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='myphotos' src={`https://cdn.pixabay.com/photo/${props.id}`} height="200" width="200" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.country}</p>
      </div>
    </div>
  );
}

export default Card;