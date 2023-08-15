/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, createContext, useState } from "react";

interface TPhoto {
  id: string | number;
  url: string;
  type: string;
  alt?: string;
}

type siderBarContextType = {
  open: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar(): void;
};
export type modalContextType = {
  file: TPhoto | null;
  model: boolean;
  setFile: React.Dispatch<React.SetStateAction<TPhoto | null>>;
  setModel: React.Dispatch<React.SetStateAction<boolean>>;
};

interface contextProps {
  children: ReactNode;
}

export const ThemeContext = createContext<siderBarContextType | null>(null);
export const ImageContext = createContext(
  {} as modalContextType
);

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

export function ModalContext({ children }: contextProps) {
  const [file, setFile] = useState<TPhoto | null>(null);
  const [model, setModel] = useState<boolean>(false);

  return (
    <ImageContext.Provider value={{ file, setFile, model, setModel }}>
      {children}
    </ImageContext.Provider>
  );
}
