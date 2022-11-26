import ExpenseItem from "./components/ExpenseItem";
import expenses from "./components/expenses.js";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => {
        return <ExpenseItem expense={expense} />;
      })}
    </div>
  );
}

export default App;
