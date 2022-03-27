import { ReactNode } from "react";
import { AuthProvider } from "./auth";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <AppProvider>{children}</AppProvider>;
};

export { AppProvider };
