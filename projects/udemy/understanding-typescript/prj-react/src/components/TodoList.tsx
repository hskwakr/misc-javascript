import React from 'react';

interface TodoListProps {
  items: Array<{ id: string; text: string }>;
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
