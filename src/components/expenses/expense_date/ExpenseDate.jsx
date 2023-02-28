import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    var {date}=props;
    date = date.split("T")[0];
    date = date.split("-");
    const newDate = new Date(date[0], date[1] - 1, date[2]);
    console.log(date);
    const month = newDate.toLocaleString('en-US', {month: 'long'});
    const day = newDate.toLocaleString('en-US', {day: '2-digit'});
    const year = newDate.getFullYear();

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{day}</div>
            <div className="expense-date__day">{year}</div>
        </div>
    )
}
export default ExpenseDate;