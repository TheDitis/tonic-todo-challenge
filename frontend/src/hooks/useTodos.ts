import { useMutation, useQuery } from '@tanstack/react-query';
import { DB } from '../utils/DB';

export const useTodos = () => {
  const {
    data: todos,
    error,
    refetch,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: DB.getTodos,
  });

  const { mutate: createTodo } = useMutation({
    mutationKey: ['todos'],
    mutationFn: DB.createTodo,
    onSuccess: () => refetch(),
  });

  const { mutate: updateTodo } = useMutation({
    mutationKey: ['todos'],
    mutationFn: DB.updateTodo,
    onSuccess: () => refetch(),
  });

  const { mutate: deleteTodo } = useMutation({
    mutationKey: ['todos'],
    mutationFn: DB.deleteTodo,
    onSuccess: () => refetch(),
  });

  return {
    todos,
    createTodo,
    updateTodo,
    deleteTodo,
    error,
  };
};
