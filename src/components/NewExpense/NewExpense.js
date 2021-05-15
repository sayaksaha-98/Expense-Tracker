import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
}

export default NewExpense;
