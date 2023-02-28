import './App.css';
import Expenses from './components/expenses/Expenses';
import './components/expenses/expense_item/ExpenseItem.css';
import NewExpense from './components/new_expenses/NewExpense';
import {useEffect, useState} from 'react';
// import Counter from './Counter';

var DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {  
    id: 'e2',
    title: 'New Mobile',
    amount: 799.49,
    date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const[expenseList, setExpensesList] = useState(DUMMY_DATA);
  const [isLoading,setIsLoading]= useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://expense-tracker-api-8ikl.onrender.com/api/v1/expenses',{method:"GET"})
      .then(response => response.json())
      .then(json => {
        setExpensesList(json.data);
        console.log(json.data);
        setIsLoading(false);
      }).catch((error) => {
          setIsLoading(false);
        })
  },[]);
    
    
  
  const onAddExpense = (new_expense) => {
    
console.log(new_expense);
    fetch('https://expense-tracker-api-8ikl.onrender.com/api/v1/expenses', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify(new_expense) // body data type must match "Content-Type" header

    })
    // DUMMY_DATA.push(new_expense);
  }
  
  if(isLoading) {
    return 'Loading...'
  }
  return (
  <div>
    <NewExpense onAddExpense={onAddExpense}/>
    <Expenses expenses={expenseList}/>
  </div>
  );
}

export default App;
