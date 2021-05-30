import React, { useState }from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const savedExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString 
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
        const stratEditingHandler = () => {
            setIsEditing(true);
        }

        const stopEditingHandler = () => {
            setIsEditing(false);
        }



    return (
    <div className="new-expense">
            {!isEditing && <button onClick={stratEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={savedExpenseDataHandler} onCancel={stopEditingHandler} />}
        
    </div>
    )
}

export default NewExpense;