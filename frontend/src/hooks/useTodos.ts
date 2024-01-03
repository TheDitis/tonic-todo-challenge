import { useQuery } from '@tanstack/react-query';
import { DB } from '../utils/DB';

export const useTodos = () => {
  const { data: todos, error } = useQuery({
    queryKey: ['todos'],
    queryFn: DB.getTodos,
  });

  return {
    todos,
    error,
  };
};
