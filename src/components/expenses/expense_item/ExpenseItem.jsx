import React from "react";
import ExpenseDate from "../expense_date/ExpenseDate";
import "./ExpenseItem.css";
// import { useState } from "react";

const ExpenseItem = (props) => {
    console.log(props);
    let{
         title='',
         amount=0,
        date=new Date()
    } = props;
    // const[title,setTitle]=useState(props.title)
    // const[amount,setAmount]=useState(props.amount)
    // const buttonClick = () => {
    //   setTitle('Updated');
    //   console.log(title);
    // }
    // const buttonClick2 = () => {
    //   setAmount(1000);
    //   console.log(amount);
    // }
    
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