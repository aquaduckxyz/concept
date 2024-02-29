import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from 'react';

interface IHeaderContextProps {
  isOpen: [boolean, Dispatch<SetStateAction<boolean>>];
}

const HeaderContext = createContext({} as IHeaderContextProps);

const useHeaderContext = () => useContext(HeaderContext);

interface StoreType {
  children: ReactNode;
}

const HeaderProvider: React.FC<StoreType> = (props) => {
  const store: IHeaderContextProps = {
    isOpen: useState<boolean>(false),
  };

  return <HeaderContext.Provider value={store}>{props.children}</HeaderContext.Provider>;
};

export { HeaderProvider, useHeaderContext };
