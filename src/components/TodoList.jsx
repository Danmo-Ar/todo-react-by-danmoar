import { useEffect, useState } from 'react';
import { useReduceContext } from '../hooks/useReduceContext';
import CircleButton from './CircleButton';

export default function TodoList() {
  let { todos, removeItem } = useReduceContext();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(todos.length);
  }, [todos]);
  const checkItem = e => {
    const circle = e.target;
    circle.classList.toggle('checked');
    circle.nextSibling.classList.toggle('checked');

    setItemCount(previousItemCount => previousItemCount--);
  };

  return (
    <div className="todo-list">
      <div
        className="list-wrapper"
        style={{ height: todos.length > 0 ? '300px' : 0 }}
      >
        {todos.map(task => {
          return (
            <div className="list" key={task} draggable={true}>
              <CircleButton checkItem={checkItem} />
              <li className="item" onClick={() => removeItem(task)}>
                {task}
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                className="cross"
              >
                <path
                  fill="#494C6B"
                  fillRule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </div>
          );
        })}
      </div>

      <div className="footer-info">
        <p className="task-number">{itemCount} items left</p>
        <div className="button-list">
          <button className="btn">All</button>
          <button className="btn">Active</button>
          <button className="btn">Completed</button>
        </div>
        <button className="btn">Clear Completed</button>
      </div>
    </div>
  );
}
