import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);

  function todoAddHandler(text: string): void {
    setTodos([...todos, { id: Math.random().toString(), text }]);
  }

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
