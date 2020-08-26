import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  sideDrawwerOpen: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function toggleSideDrawwer() {
    dispatch({
      type: "TOGGLE_SIDE_DRAWWER",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        sideDrawwerOpen: state.sideDrawwerOpen,
        toggleSideDrawwer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
