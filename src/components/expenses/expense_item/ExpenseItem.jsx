import React from "react";
import ExpenseDate from "../expense_date/ExpenseDate";
import "./ExpenseItem.css";
// import { useState } from "react";

const ExpenseItem = (props) => {
  let{
    title='',
         amount=0,
        date=new Date()
    } = props;
  return(
  <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description" >
            <h2 >{title}</h2>
            <div className="expense-item__price ">₹{amount}</div>
    </div>
    {/* <button onClick={buttonClick}>change Title</button> */}
    {/* <button onClick={buttonClick2}>change Amount</button> */}
  </div>
)
};
export default ExpenseItem;