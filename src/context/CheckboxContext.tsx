import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type CheckboxProviderProps = {
  children: ReactNode;
};

export type CheckboxContext = {
  toggleCheckbox: () => void;
  isCheckboxed: boolean;
};

export const CheckboxContext = createContext({} as CheckboxContext);

export const useCheckboxContext = () => {
  return useContext(CheckboxContext);
};
const CheckboxProvider = ({ children }: CheckboxProviderProps): ReactNode => {
  const [isCheckboxed, setIsCheckboxed] = useState<boolean>(() => {
    const stored = localStorage.getItem("checkboxed");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect((): void => {
    localStorage.setItem("checkboxed", JSON.stringify(isCheckboxed));
  }, [isCheckboxed]);

  const toggleCheckbox = (): void => {
    setIsCheckboxed((prev: boolean) => !prev);
  };

  return (
    <CheckboxContext.Provider value={{ toggleCheckbox, isCheckboxed }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default CheckboxProvider;
