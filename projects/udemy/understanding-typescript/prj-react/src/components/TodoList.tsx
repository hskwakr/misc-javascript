import React from 'react';
import { Todo } from '../todo.model';

import "./TodoList.css"

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}

export default function TodoList({
  items,
  onDeleteTodo,
}: TodoListProps): JSX.Element {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button
            onClick={() => {
              onDeleteTodo(item.id);
            }}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
}
