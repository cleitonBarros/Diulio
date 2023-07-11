/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, createContext, useState } from "react";

type siderBarContextType = {
  open: boolean ;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar(): void;
};
interface contextProps {
  children: ReactNode;
}

export const ThemeContext = createContext<siderBarContextType | null>(null);

export function SiderBarContext({ children }: contextProps) {
  const [open, setClose] = useState<boolean>(false);

  function showSideBar() {
    setClose(!open);
  }

  return (
    <ThemeContext.Provider value={{ open, setClose, showSideBar }}>
      {children}
    </ThemeContext.Provider>
  );
}
