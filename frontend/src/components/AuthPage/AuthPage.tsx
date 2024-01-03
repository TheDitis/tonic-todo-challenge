import { useQuery } from '@tanstack/react-query';
import { Card, Spinner } from 'flowbite-react';
import { DB } from '../../utils/DB';

export const AuthPage = () => {
  const { data: users, status } = useQuery({
    queryKey: ['users'],
    queryFn: DB.getAllUsers,
  });

  if (status === 'error') {
    return (
      <Card>
        <h3 className="text-2xl font-semibold text-red-600">
          We're unable to find users right now, please try again later.
        </h3>
      </Card>
    );
  }

  if (status === 'pending' || users === undefined) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>AuthPage</h1>
    </div>
  );
};
