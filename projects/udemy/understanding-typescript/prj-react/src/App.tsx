import React from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App(): JSX.Element {
  const todos = [{ id: 't1', text: 'Finish the course' }];

  function todoAddHandler(text: string): void {
    console.log(text);
  }

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
