import { useState, useEffect, createContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';
import axios from 'axios';

declare module 'axios' {
    export interface AxiosStatic {
      merge(...sources: any[]): any;
    }
  }

interface iLoginFormData {
  email: string;
  password: string;
}

interface iTech {
  id: number;
  title: string;
}

interface iUser {
  id: number;
  name: string;
  email: string;
  techs: iTech[];
}

interface iLoginProviderProps {
    children: ReactNode;
}


interface iAuthContext {
  user: iUser | null;
  setUser: (user: iUser | null) => void;
  loginUser: (data: iLoginFormData) => Promise<void>;
  loading: boolean;
  alert: any;
  setAlert: (alert: any) => void;
  setLoading: (loading: boolean) => void;
  globalSetLoading: boolean;
  tech: iTech[];
  setTech: (tech: iTech[]) => void;
}

export const AuthContext = createContext<iAuthContext>({
  user: null,
  setUser: () => {},
  loginUser: async () => {},
  loading: false,
  alert: null,
  setAlert: () => {},
  setLoading: () => {},
  globalSetLoading: true,
  tech: [],
  setTech: () => {},
});


export const LoginProvider= ({ children }: iLoginProviderProps) => {

  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [alert, setAlert] = useState<any>(null);
  const [globalSetLoading, setGlobalSetLoading] = useState<boolean>(true);
  const [tech, setTech] = useState<iTech[]>([]);
  const { merge } = axios;

  const loginUser = async (data: iLoginFormData): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.post('/sessions', data);
      localStorage.setItem('@usertoken', response.data.token);
      toast.success('Login realizado com sucesso', {
        position: 'top-right',
        autoClose: 2000,
      });
      setUser(response.data.user);
      setTech(response.data.user.techs);

      navigate('/home');
    } catch (error) {
      setAlert({
        type: 'error',
        message: toast.error('Combinação de email / password incorreta', {
          position: toast.POSITION.TOP_RIGHT,
        }),
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    const userProfile = async () => {
      const token = localStorage.getItem('@usertoken');

      if (token) {
        try {
          const headers = {
            Authorization: `Bearer ${token}`,
            };
            api.defaults.headers = merge(api.defaults.headers, headers);

          const response = await api.get('/profile');

          setUser(response.data);
        } catch (error) {
          localStorage.removeItem('@usertoken');
          navigate('/login');
        }
      }
      setGlobalSetLoading(false);
    };

    userProfile();
  }, [navigate, merge]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        loading,
        alert,
        setAlert,
        setLoading,
        globalSetLoading,
        tech,
        setTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};