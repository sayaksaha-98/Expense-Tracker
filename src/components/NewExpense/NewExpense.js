import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function stopEditingHandler() {
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now().toString(),
    };
    props.onAddExpense(expenseData);
    stopEditingHandler();
  }

  let newExpense = (
    <button className="new-expense" onClick={startEditingHandler}>
      Add New Expense
    </button>
  );

  if (isEditing) {
    newExpense = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  return <Card className="new-expense">{newExpense}</Card>;
}

export default NewExpense;
