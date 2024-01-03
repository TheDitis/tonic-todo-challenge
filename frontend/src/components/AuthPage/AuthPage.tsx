import { useQuery } from '@tanstack/react-query';
import { Card, Spinner } from 'flowbite-react';
import { useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import { DB } from '../../utils/DB';

export const AuthPage = () => {
  const { login } = useContext(UserContext);
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
    <Card>
      <h3 className="text-2xl font-semibold">Users</h3>
      <p>Please select a user to login as:</p>
      <div className="space-y-1">
        {users.map((user) => (
          <Card
            className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-0.5"
            theme={{ root: { children: 'p-3' } }}
            key={user.id}
            onClick={() => {
              login(user.username);
            }}
          >
            <p>{user.username}</p>
          </Card>
        ))}
      </div>
    </Card>
  );
};
