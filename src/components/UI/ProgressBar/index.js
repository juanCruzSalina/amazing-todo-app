import React from 'react';
import './ProgressBar.scss';

export const ProgressBar = (props) => {
  const completedTasks = props.data.filter(
    (data) => data.isCompleted === true
  ).length;
  const totalTasks = props.data.length;
  const percentageCompleted = parseInt((completedTasks / totalTasks) * 100, 10);

  return (
    <div className='progressbar__container'>
      <div
        className='progressbar'
        style={{ width: `${percentageCompleted}%` }}
      ></div>
      <h3>{`${completedTasks} of ${totalTasks} tasks completed`}</h3>
    </div>
  );
};
