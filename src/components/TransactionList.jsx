import Transaction from "./Transaction";
import { useGlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useGlobalContext();

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} {...transaction} />;
        })}
      </ul>
    </>
  );
};

export default TransactionList;
