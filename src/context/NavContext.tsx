import { createContext, useState, useContext, ReactNode } from "react";
import { useDeviceType } from "../hooks/useDevice";

interface NavContextType {
  isLeftOpen: boolean;
  isRightOpen: boolean;
  toggleLeft: () => void;
  toggleRight: () => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

interface NavProviderProps {
  children: ReactNode;
}

export const NavProvider = ({ children }: NavProviderProps) => {
  const device = useDeviceType();
  const [isLeftOpen, setIsLeftOpen] = useState(device !== "desktop" ? false : true);
  const [isRightOpen, setIsRightOpen] = useState(device !== "desktop" ? false : true);

  const toggleLeft = () => setIsLeftOpen((prev) => !prev);
  const toggleRight = () => setIsRightOpen((prev) => !prev);

  return (
    <NavContext.Provider value={{ isLeftOpen, isRightOpen, toggleLeft, toggleRight }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("useNav must be used within a NavProvider");
  return context;
};
