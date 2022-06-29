import React from 'react';
import './ExpenseItemProps.css';

function ExpenseItemProps(props)
{
 //let title = "Car Insurrance";
const month = props.date.toLocaleString('en-US', {month: "long"});
const year = props.date.getFullYear();
const day = props.date.toLocaleString('en-US', {day:'2-digit'});

    return(
       <div className="expense">
           {/* <h2>{2+2}</h2> 
           <h2>{title}</h2> 
           <div>{props.date.toISOString()}</div> */}
            <h6>ExpenseItemProps starts</h6>
            <div>
                <div>{year}</div>
                <div>{month}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item-description">
                <h2>{props.title}</h2>
                <div className='expense-item-price'>${props.amount}</div>
            </div>

            <div>
                <div>{year}</div>
                <div>{month}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item-description">
                <h2>{props.title}</h2>
                <div className='expense-item-price'>${props.amount}</div>
            </div>
       </div>
    );
}

export default ExpenseItemProps;