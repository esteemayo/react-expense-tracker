import { FaTimes } from "react-icons/fa";

import { useGlobalContext } from "../context/GlobalState";
import Button from "./Button";

const Transaction = ({ id, text, amount }) => {
  const { handleDeleteTransaction } = useGlobalContext();

  const sign = amount < 0 ? "-" : "+";

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <Button
        icon={<FaTimes />}
        className="delete-btn"
        onClick={() => handleDeleteTransaction(id)}
      />
    </li>
  );
};

export default Transaction;
