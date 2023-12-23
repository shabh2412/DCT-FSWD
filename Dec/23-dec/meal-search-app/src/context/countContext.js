import { createContext, useState } from "react";

export const CountContext = createContext({
  count: 0,
  set_count: () => { },
});

export const ContextProvider = ({ children }) => {
  const [count, set_count] = useState(0);
  return <CountContext.Provider value={{
    count: count,
    set_count: set_count,
  }} >
    {children}
  </CountContext.Provider>;
};