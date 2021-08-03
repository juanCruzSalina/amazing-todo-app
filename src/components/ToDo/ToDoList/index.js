import React from 'react';

import { ToDoItem } from '../ToDoItem';

import { ProgressBar } from '../../UI/ProgressBar';

import './ToDoList.scss';

export const ToDoList = (props) => {
  return (
    <div className='todo__list'>
      <ProgressBar data={props.list} />
      {props.list.map((item) => (
        <ToDoItem {...item} handleComplete={props.onComplete} />
      ))}
    </div>
  );
};
