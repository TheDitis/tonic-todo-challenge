import { Card } from 'flowbite-react';
import { useTodos } from '../../hooks/useTodos';
import { NewTodoItemControl } from './NewTodoItemControl';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos, createTodo, updateTodo, deleteTodo } = useTodos();
  return (
    <Card>
      <h3 className="text-2xl font-semibold">Todo List</h3>
      <div className="space-y-2">
        {todos !== undefined && todos.length ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateSelf={updateTodo}
              deleteSelf={deleteTodo}
            />
          ))
        ) : (
          <p className="text-gray-900 dark:text-white">No todos to show</p>
        )}
        <NewTodoItemControl createTodo={createTodo} />
      </div>
    </Card>
  );
};
