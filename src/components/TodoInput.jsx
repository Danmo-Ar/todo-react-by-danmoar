import theme from '../assets/icon-sun.svg';
import CircleButton from './CircleButton';

import { useRef } from 'react';
import { useReduceContext } from '../hooks/useReduceContext';
import { useEffect } from 'react';

export default function TodoInput() {
  const todo = useRef(null);
  const { addTask, todos } = useReduceContext();

  useEffect(() => {
    const existingTodo = JSON.parse(localStorage.getItem('allTodo'));
    existingTodo && existingTodo.length > 1 && addTask(existingTodo);
  }, [addTask]);

  const submitHandler = e => {
    e.preventDefault();
    addTask(todo.current.value);
    localStorage.setItem(
      'allTodo',
      JSON.stringify([...todos, todo.current.value])
    );
    todo.current.value = '';
  };

  return (
    <div className="todo-input">
      <div className="todo-header">
        <h1>TODO</h1>
        <img src={theme} alt="" />
      </div>

      <form onSubmit={submitHandler}>
        <CircleButton />
        <input type="text" placeholder="Enter your task" ref={todo} />
      </form>
    </div>
  );
}
