import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import IncomeExpenses from "./components/IncomeExpenses";
import Balance from "./components/Balance";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <TransactionForm />
      </div>
    </div>
  );
}

export default App;
