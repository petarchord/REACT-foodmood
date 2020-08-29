import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  bill: 0,
  order: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function increaseBill(price) {
    dispatch({
      type: "INCREASE_BILL",
      payload: price,
    });
  }

  function addOrderItem(item) {
    dispatch({
      type: "ADD_ORDER_ITEM",
      payload: item,
    });
  }

  function removeOrderItem(item) {
    dispatch({
      type: "REMOVE_ORDER_ITEM",
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        bill: state.bill,
        order: state.order,
        increaseBill,
        addOrderItem,
        removeOrderItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
