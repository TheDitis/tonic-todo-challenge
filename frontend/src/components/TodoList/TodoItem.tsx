import { Icon } from '@iconify/react';
import { Card, Checkbox, TextInput, Tooltip } from 'flowbite-react';
import { useState } from 'react';
import { Todo } from '../../types/todo.types';

type TodoItemProps = {
  todo: Todo;
  updateSelf: (todo: Todo) => void;
  deleteSelf: (id: string) => void;
};

export const TodoItem = ({ todo, deleteSelf, updateSelf }: TodoItemProps) => {
  const [text, setText] = useState<string>(todo.text);

  return (
    <Card
      theme={{
        root: { children: 'flex items-center gap-2 py-1 px-2 w-full' },
      }}
      className="flex flex-row items-center justify-between"
    >
      <Checkbox
        defaultChecked={todo.completed}
        size={5}
        onChange={(e) => {
          if (todo.completed !== e.target.checked) {
            updateSelf({ ...todo, done: e.target.checked } as Todo);
          }
        }}
      />
      <TextInput
        className="w-full"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onBlur={() => {
          if (todo.text !== text) {
            updateSelf({ ...todo, text } as Todo);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === 'Escape') {
            (e.target as HTMLInputElement).blur();
          }
        }}
      />
      <Tooltip
        content="Delete item"
        className="delay-1000"
        animation="duration-1000"
      >
        <Icon
          className="text-2xl cursor-pointer text-gray-900 dark:text-white hover:text-red-500"
          onClick={() => deleteSelf(todo.id)}
          icon="typcn:delete-outline"
        />
      </Tooltip>
    </Card>
  );
};
