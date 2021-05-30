import React, { useState }from 'react';
//import Expenseitem from './Expenseitem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'


const Expenses = (props) =>{
       const [filteredYear, setFilteredYear] = useState('2020');
       const filterChangeHandler = selectedYear => {
              setFilteredYear(selectedYear)
              // console.log('Expenses.js');
              // console.log(selectedYear);
       }

       const filteredExpenses = props.items.filter(expense => {
              return expense.date.getFullYear().toString() === filteredYear;
       })

       // let expenseContent = <p>No expense found.</p>
       // if(filteredExpenses.length > 0 ){
       //        expenseContent = filteredExpenses.map((expense) =>( 
       //               <Expenseitem 
       //                        key={expense.id}
       //                        title={expense.title}
       //                        amount={expense.amount}
       //                        date={expense.date} 
       //                        />
       //                        ))
       // }

    return ( 
           <div>                  
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {/* //möglichkeit 1 */}
       {filteredExpenses.length === 0  && <p>No expense found.</p>} 
       <ExpensesChart expenses={filteredExpenses} />
       {/* //möglichkeit 2 */}
       <ExpensesList items={filteredExpenses} />
     </Card>
    </div>
    )
}

export default Expenses;