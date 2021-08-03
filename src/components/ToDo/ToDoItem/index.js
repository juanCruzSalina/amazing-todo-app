import React from 'react';
import './ToDoItem.scss';

export const ToDoItem = (props) => {
  return (
    <div
      className={props.isCompleted ? 'todo__item completed' : 'todo__item'}
      onClick={() => {
        props.handleComplete(props.id);
      }}
    >
      <p className={'item__text'}>
        {props.todo}
        <div className={'check__line'} />
      </p>
    </div>
  );
};
