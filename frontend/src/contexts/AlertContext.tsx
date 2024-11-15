import { createContext, PropsWithChildren, useContext, useState } from 'react';

const initialState = {
  text: '',
  type: '',
};

export const AlertContext = createContext({
  ...initialState,
  setAlert: (_text: string, _type: string) => { },
});

export const AlertProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');

  const setAlert = (text: string, type: string) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText('');
      setType('');
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);