const reducer = (state, action) => {
  if (action.type === "ADD_TRANSACTION") {
    const newTransaction = [action.payload, ...state.transactions];

    return {
      ...state,
      transactions: newTransaction,
    };
  }

  if (action.type === "DELETE_TRANSACTION") {
    const newTransaction = state.transactions.filter(
      (transaction) => transaction.id !== action.payload
    );

    return {
      ...state,
      transactions: newTransaction,
    };
  }

  throw new Error("No matching action type");
};

export default reducer;
