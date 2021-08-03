import React, { Fragment } from 'react';
import './AddTodoButton.scss';

export const AddTodoButton = () => {
  return (
    <Fragment>
      <button
        type='submit'
        className={'button__main'}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Add
      </button>
    </Fragment>
  );
};
