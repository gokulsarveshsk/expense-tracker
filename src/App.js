import './App.css';
import Expenses from './components/expenses/Expenses';
import './components/expenses/expense_item/ExpenseItem.css';
import NewExpense from './components/new_expenses/NewExpense';
import {useEffect, useState} from 'react';
// import Counter from './Counter';

const DUMMY_DATA = [
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
  const [isLoading,setIsLoading]= useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://vehicle-9tfu.onrender.com/api/v1/vehicle',{method:"GET"})
      .then(response => response.json())
      .then(json => {console.log(json)
        setIsLoading(false);
      }).catch((error) => {
          setIsLoading(false);
        })
  },[]);
    
    
  const[expenseList, setExpensesList] = useState(DUMMY_DATA);
  const onAddExpense = (new_expense) => {
    setExpensesList((prevExpenses) => {
      return [new_expense,...prevExpenses];
    });
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
