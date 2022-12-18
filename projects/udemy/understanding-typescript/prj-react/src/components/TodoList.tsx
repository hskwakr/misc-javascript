import React from 'react';
import { Todo } from '../todo.model';

interface TodoListProps {
  items: Todo[];
}

export default function TodoList({ items }: TodoListProps): JSX.Element {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
