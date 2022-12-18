import React, { useRef } from 'react';

export default function NewTodo(): JSX.Element {
  const textInputRef = useRef<HTMLInputElement>(null);

  function todoSubmitHandler(event: React.FormEvent): void {
    event.preventDefault();

    const enteredText = textInputRef.current?.value ?? '';
    console.log(enteredText);
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
}
