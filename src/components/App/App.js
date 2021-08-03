import { useState } from 'react';

import { ToDoList } from '../ToDo/ToDoList';
import { Title } from '../UI/Title';
import { AddTodoModal } from '../AddTodo/AddTodoModal';
import { ShowAddModal } from '../AddTodo/ShowAddModal';

import './App.scss';

function App() {
  const [toDoList, setToDoList] = useState([
    {
      id: '12314sgfsdfse',
      todo: 'Kappa no ksad',
      isCompleted: false,
    },
    {
      id: '1123gfsdfse',
      todo: 'Kappa no ksad',
      isCompleted: false,
    },
    {
      id: '123456fsdfse',
      todo: 'Kappa no ksad',
      isCompleted: false,
    },
  ]);

  const completeTodo = (id) => {
    let mappedList = toDoList.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          isCompleted: !el.isCompleted,
        };
      }
      return el;
    });
    setToDoList(mappedList);
  };

  return (
    <div className='App'>
      <Title />
      <ToDoList list={toDoList} onComplete={completeTodo} />
      <ShowAddModal />
      <AddTodoModal />
    </div>
  );
}

export default App;
