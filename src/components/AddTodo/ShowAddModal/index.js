import React from 'react';
import './ShowAddModal.scss';

export const ShowAddModal = () => {
  const handleModalShow = () => {
    let modalSelector = document.querySelector('.modal__main');
    modalSelector.classList.toggle('show');
  };

  return (
    <div className='add__todo'>
      <button className='add__button' onClick={handleModalShow}>
        +
      </button>
    </div>
  );
};
