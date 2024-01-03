import { Button, Card } from 'flowbite-react';
import { useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import { useTodos } from '../../hooks/useTodos';
import { NewTodoItemControl } from './NewTodoItemControl';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { logout } = useContext(UserContext);
  const { todos, createTodo, updateTodo, deleteTodo } = useTodos();
  return (
    <Card className="relative">
      <Button className="absolute top-0 right-0" onClick={logout}>
        Logout
      </Button>
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
