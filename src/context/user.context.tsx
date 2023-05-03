import { createContext, useContext, ReactElement, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { User } from '../models/user';
import { AuthService } from '../services/auth/auth.services';

type Value = {
  login: (credentials: {}) => void;
  user: User | null;
  logOut: () => void;
  signUp: (credentials: {}) => void;
};

const UserContext = createContext<Value>({
  login: () => {},
  user: {
    email: '',
    id: '',
    password: '',
  },
  logOut: () => {},
  signUp: () => {},
});

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }: { children: ReactElement }) {
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useLocalStorage('user', storedUser);

  const login = (credentials: {}) => {
    AuthService.login(credentials).then((response) => {
      setUser(response.data);
    });
  };

  const logOut = () => {
    setUser(null);
  };

  const signUp = (credentials: {}) => {
    AuthService.register(credentials).then((response) => {
      setUser(response.data);
    });
  };

  const value: Value = useMemo(
    () => ({
      login,
      user,
      logOut,
      signUp,
    }),
    [login, user, logOut, signUp],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
