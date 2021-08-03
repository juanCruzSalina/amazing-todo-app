import React, { Fragment } from 'react';
import './AddTodoInput.scss';

export const AddTodoInput = (props) => {
  return (
    <Fragment>
      <input className={'add__input'} placeholder={'To do:'} />
    </Fragment>
  );
};
