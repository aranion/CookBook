import { createContext, Context, ReactNode, useEffect, useContext, useState } from 'react';
import { IUser } from 'models/User';

interface Props {
  children: ReactNode
}
interface IAuth {
  isAuth: boolean,
  user?: IUser
}

const initial = {
  isAuth: false,
}

const authContext: Context<IAuth> = createContext(initial);

export function ProvideAuth({ children }: Props) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
}

function useProvideAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | undefined>(undefined);
  useEffect(() => {
    const unsubscribe = ((user?: IUser) => {
      if (user) {
        setIsAuth(true);
        setUser(user);
      } else {
        setIsAuth(false);
        setUser(undefined);
      }
    });
    return () => unsubscribe();
  }, []);
  return {
    isAuth,
    user,
  };
}