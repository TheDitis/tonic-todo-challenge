import { Icon } from '@iconify/react';
import { Button, TextInput, Tooltip } from 'flowbite-react';
import React, { useState } from 'react';

type NewTodoItemControlProps = {
  createTodo: (todo: any) => void;
};

export const NewTodoItemControl = ({ createTodo }: NewTodoItemControlProps) => {
  const [text, setText] = useState<string | null>(null);

  return (
    <div className="flex flex-row justify-center items-center">
      {text === null ? (
        <Tooltip
          content="Create todo item"
          className="delay-1000"
          animation="duration-1000"
        >
          <Button className="w-12 h-12" pill onClick={() => setText('')}>
            <Icon icon="mdi:plus" className="text-2xl" />
          </Button>
        </Tooltip>
      ) : (
        <>
          <TextInput
            className="w-full"
            value={text}
            autoFocus
            onChange={(e) => setText(e.target.value)}
            onBlur={() => {
              if (text !== null && text.length) {
                createTodo({ text });
              }
              setText(null);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                (e.target as HTMLInputElement).blur();
              }
              if (e.key === 'Escape') {
                setText(null);
              }
            }}
          />
        </>
      )}
    </div>
  );
};
