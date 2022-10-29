import React, { Children, createContext, PropsWithChildren } from 'react';

export const userContext = createContext( {});

export const UserContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (<userContext.Provider value={{}}>
        {children}
    </userContext.Provider>);
};
