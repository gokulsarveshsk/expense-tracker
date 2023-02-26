import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {

    console.log(props);

const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

const onTitleChange = (event) => {
    setEnteredTitle(event.target.value);
}

const onAmountChange = (event)=>{
    setEnteredAmount(event.target.value);
}
const onDateChange = (event)=>{
    setEnteredDate(event.target.value);
}
const onSubmit=(event)=>{
    event.preventDefault();
   const new_expense={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
   }
   props.onFormSubmit(new_expense);
   setEnteredAmount("");
   setEnteredDate("");
   setEnteredTitle("")

}
// use call back to push data child to parent component


    return(
        <>
            <form action="" onSubmit={onSubmit}>
                <div  className="new-expense__controls">

                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="expense_title" value={enteredTitle} id="title" onChange={onTitleChange}/>
                    </div>

                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="expense_amount" value={enteredAmount} id="amount" min="0" onChange={onAmountChange} />
                    </div>

                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="expense_date" value={enteredDate} id="date" min="2019-01-01" max="2022-12-31" onChange={onDateChange} /> 
                    </div>
                   
                </div>

                <div className="new-expense__actions">
                    <button>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
            </>
        
    );
}
export default ExpenseForm;