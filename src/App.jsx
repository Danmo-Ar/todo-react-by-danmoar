// styles
import './styles/main.scss';
// components
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import { ReduceProvider } from './hooks/useTodoreducer';
function App() {
  return (
    <div className="todo-app">
      <div className="bg-image"></div>
      <div className="todo-wrap">
        <ReduceProvider>
          <TodoInput />
          <TodoList />
        </ReduceProvider>
      </div>
    </div>
  );
}

export default App;
