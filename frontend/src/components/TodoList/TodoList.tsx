import { Card } from 'flowbite-react';
import { useTodos } from '../../hooks/useTodos';
import { NewTodoItemControl } from './NewTodoItemControl';

export const TodoList = () => {
  const { todos, createTodo } = useTodos();
  return (
    <Card>
      <h3 className="text-2xl font-semibold">Todo List</h3>
      <div>
        {todos !== undefined && todos.length ? (
          todos.map((todo) => (
            <div key={todo.id}>
              <p>{todo.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-900 dark:text-white">No todos to show</p>
        )}
        <NewTodoItemControl createTodo={createTodo} />
      </div>
    </Card>
  );
};
