import React from 'react';
import './ExpenseItem.css';


function ExpenseItem(){
    return (
        <div className="expense">
            <p>Here Expense Item started</p>
            <div className="expense-item"> March 12th 2022</div>
            <div className="expense-item-description">
                <h2 className='expense-h2'>Car Insurrance</h2>
                <div className='expense-item-price'>$ 200</div>
            </div>

            <div className="expense-heading">This is the list of Expense Item</div>
            <div className="expense-item"> March 12th 2022</div>
            <div className="expense-item-description">
                <h2 className='expense-h2'>Car Insurrance</h2>
                <div className='expense-item-price'>$ 200</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
