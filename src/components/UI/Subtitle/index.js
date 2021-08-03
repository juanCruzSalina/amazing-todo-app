import React from 'react';
import './Subtitle.scss';

export const Subtitle = (props) => {
  return (
    <div className='subtitle__main'>
      <h2>{props.children}</h2>
    </div>
  );
};
