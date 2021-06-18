import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import { useGlobalContext } from "../context/GlobalState";
import Button from "./Button";
import Input from "./Input";

const TransactionForm = () => {
  const { addTransaction } = useGlobalContext();
  const [values, setValues] = useState({
    text: "",
    amount: 0,
  });

  const handleChange = ({ target: input }) => {
    setValues({ ...values, [input.name]: input.value });
  };

  const { text, amount } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text && amount) {
      const newTransaction = {
        id: new Date().getTime().toString(),
        amount: +amount,
        text,
      };

      addTransaction(newTransaction);
      setValues({ text: "", amount: "" });
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Text"
          name="text"
          placeholder="Enter text..."
          value={text}
          onChange={handleChange}
        />
        <Input
          type="number"
          label="Amount"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
        <Button
          text="Add Transaction"
          type="submit"
          icon={<FaArrowRight style={{ marginBottom: "-3px" }} />}
        />
      </form>
    </>
  );
};

export default TransactionForm;
