import { createContext, useContext, useReducer } from "react";
import { browsingReducer, initialState } from "src/reducers/browsing.reducer";

const BrowsingContext = createContext(initialState);

const BrowsingProvider = ({ children }) => {
  const [browsingState, browsingDispatch] = useReducer(
    browsingReducer,
    initialState
  );
  return (
    <BrowsingContext.Provider value={{ browsingState, browsingDispatch }}>
      {children}
    </BrowsingContext.Provider>
  );
};

const useBrowse = () => useContext(BrowsingContext);

export { BrowsingProvider, useBrowse };
