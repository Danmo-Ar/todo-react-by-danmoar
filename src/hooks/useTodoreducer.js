import { useCallback } from 'react';
import { createContext, useReducer } from 'react';

export const ReduceContext = createContext();

const todoreducer = (state, action) => {
  console.log(state.todos);
  switch (action.type) {
    case 'ADD':
      if (typeof action.task === 'string') {
        return {
          ...state,
          todos: [...state.todos, action.task],
        };
      } else {
        return {
          ...state,
          todos: [...action.task],
        };
      }
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter(todo => todo !== action.task),
      };
    default:
      return state;
  }
};

export function ReduceProvider({ children }) {
  const defaultState = {
    todos: [],
    completedTodo: [],
  };
  const [state, dispatch] = useReducer(todoreducer, defaultState);

  const addTask = useCallback(task => {
    dispatch({ type: 'ADD', task });
  }, []);

  const removeItem = task => {
    dispatch({ type: 'REMOVE', task });
    localStorage.setItem(
      'allTodo',
      JSON.stringify([state.todos.filter(todo => todo !== task)])
    );
  };

  return (
    <ReduceContext.Provider value={{ ...state, addTask, removeItem }}>
      {children}
    </ReduceContext.Provider>
  );
}
