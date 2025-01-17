import { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext<{ dark: boolean; handleDarkMode: () => void } | null>(null);

import { ReactNode } from "react";

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', dark.toString());
  }, [dark]);

  const handleDarkMode = () => {
    setDark(prevDark => !prevDark);
  };

  return (
    <DarkModeContext.Provider value={{ dark, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext };
export default DarkModeProvider;
