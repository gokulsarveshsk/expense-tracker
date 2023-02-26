import React from "react";
import ExpenseForm from "./expense_form/ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const onSave = (new_expense) => {
        const expense = {
            ...new_expense,
            id: Math.random().toString()
        };
        console.log(expense);
        props.onAddExpense(expense);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onFormSubmit={onSave}/>
        </div>
    );
}
export default NewExpense;