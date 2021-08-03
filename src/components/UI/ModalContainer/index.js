import React from 'react';
import './ModalContainer.scss';

export const ModalContainer = (props) => {
  const handleModalCloseOut = (e) => {
    if (e.target.className === 'modal__main show') {
      let modalSelector = document.querySelector('.modal__main');
      modalSelector.classList.remove('show');
    }
  };

  return (
    <div className={'modal__main'} onClick={handleModalCloseOut}>
      {props.children}
    </div>
  );
};
