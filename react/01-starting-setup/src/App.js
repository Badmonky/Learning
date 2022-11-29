import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <NewExpense />
      <Expenses />
      
    </div>
  );
}

export default App;
