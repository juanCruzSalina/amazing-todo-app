import React from 'react';
// import { v4 as uuidv4 } from 'uuid';

import './AddTodoModal.scss';

import { Subtitle } from '../../UI/Subtitle';
import { ModalContainer } from '../../UI/ModalContainer';

import { AddTodoButton } from '../AddTodoButton';
import { AddTodoInput } from '../AddTodoInput';

export const AddTodoModal = (props) => {
  // const [formState, setFormState] = useState({
  //   id: uuidv4(),
  //   todo: '',
  //   isCompleted: false,
  // });

  return (
    <ModalContainer>
      <main className={'modal__content'}>
        <Subtitle> Add todo </Subtitle>
        <form className={'text__box'}>
          <AddTodoInput />
          <AddTodoButton />
        </form>
      </main>
    </ModalContainer>
  );
};
