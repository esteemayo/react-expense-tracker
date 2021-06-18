import { useEffect, useContext, useReducer, createContext } from "react";

import reducer from "./reducer";

const getLocalStorage = () => {
  const transactions = localStorage.getItem("transactions");
  if (transactions) return JSON.parse(transactions);
  return [];
};

const initialStates = {
  transactions: getLocalStorage(),
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const handleDeleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, addTransaction, handleDeleteTransaction }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
