import React from 'react';
import ExpenseDate from './ExpenseDate';

function ExpenseDateImplementation(props)
{
    return(
       <div>
            <h6>Multiple component starts</h6>
               <ExpenseDate date={props.date}/>  
                <div className="expense-item-description">
                    <h2>{props.title}</h2>
                    <div className='expense-item-price'>${props.amount}</div>
                </div>    
       </div>
    );
}

export default ExpenseDateImplementation;