import { createContext, FC, useState, useContext, useEffect } from 'react';
import { User } from 'firebase/auth';

import { onAuthStateChanged } from '../firebase';

type AuthProviderValue = {
  user: User | null;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthProviderValue>({
  user: null,
  isAuthenticated: false,
});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = Boolean(user);

  useEffect(() => {
    onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const value = {
    user,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
