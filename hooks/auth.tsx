import React, { createContext, ReactNode, useContext, useState } from "react";
import api from "../services/api";

interface User {
  id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuhtContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  const signIn = async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/sessions", {
      email,
      password,
    });

    console.log(response.data);
    const { token, user } = response.data;
    setData({ token, user });
    api.defaults.headers.authorization = `Bearer ${token}`;
  };

  return (
    <AuhtContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuhtContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuhtContext);
  return context;
};

export { AuthProvider, useAuth };
