import React, { useRef } from 'react';

import './NewTodo.css';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

export default function NewTodo({ onAddTodo }: NewTodoProps): JSX.Element {
  const textInputRef = useRef<HTMLInputElement>(null);

  function todoSubmitHandler(event: React.FormEvent): void {
    event.preventDefault();

    const enteredText = textInputRef.current?.value ?? '';
    onAddTodo(enteredText);
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
}
