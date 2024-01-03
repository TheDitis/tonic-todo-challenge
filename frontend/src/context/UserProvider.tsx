import { Spinner } from 'flowbite-react';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/user.types';
import { DB } from '../utils/DB';

interface UserContextData {
  user: User | null;
  login: (username: string) => Promise<void>;
  signup: (username: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const isUser = (user: User | null): user is User =>
  user !== null && 'id' in user && 'username' in user;

export const UserContext = createContext<UserContextData>({
  user: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  error: null,
});
export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUser = async () => {
      const user = await DB.loadAuth();
      setUser(user);
      setLoading(false);
    };
    loadUser();
  }, []);

  // Redirect to home if user is logged in
  useEffect(() => {
    if (isUser(user)) {
      navigate('/');
    } else {
      navigate('/auth');
    }
  }, [navigate, user]);

  const auth = async (username: string, kind: 'login' | 'signup') => {
    try {
      const user = await DB[kind](username);
      setUser(user);
      navigate('/');
      setAuthError(null);
    } catch (e) {
      setAuthError((e as Error)?.message || 'Something went wrong');
    }
  };

  const login = async (username: string) => auth(username, 'login');
  const signup = async (username: string) => auth(username, 'signup');

  const logout = () => {
    DB.logout();
    setUser(null);
    setAuthError(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        error: authError,
      }}
    >
      {loading ? (
        <div className="h-full w-full flex flex-col justify-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};
