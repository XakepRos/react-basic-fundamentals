//import logo from './logo.svg';
import './App.css';
import Subcompomnent1 from './components/Subcomonent1';
import ExpenseItem from './components/ExpenseItem';
import ExpenseItemProps from './components/ExpenseItemProps';
import ExpenseItemPropsArray from './components/ExpenseItemPropsArray';
import ExpenseDateImplementation from './components/ExpenseDateImplementation';

function App() {

  let expenseDate = new Date(2021, 1, 10);
  let expenseTitle = "School fee";
  let expenseAmount = 300;

  let expensesArray = [
    {
      id: 'e1',
      title: 'School fee',
      amount: 500,
      date: new Date(2022, 5, 19)
    },
    {
      id: 'e2',
      title: 'Books fee',
      amount: 900,
      date: new Date(2022, 4, 20)
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       
        <h3>App Component</h3>
        <p>Let's get started</p>
      </header>
      {/* <Subcompomnent1></Subcompomnent1> */}
      <Subcompomnent1 />
      <ExpenseItem />
      {/* <ExpenseItemProps date = {expenseDate} title = {expenseTitle} amount ={expenseAmount}> </ExpenseItemProps> */}
      <ExpenseItemProps date = {expenseDate} title = {expenseTitle} amount ={expenseAmount}/>
      <ExpenseItemPropsArray 
          date = {expensesArray[0].date} 
          title = {expensesArray[0].title} 
          amount = {expensesArray[0].amount}
      />
       <ExpenseItemPropsArray 
          date = {expensesArray[1].date} 
          title = {expensesArray[1].title} 
          amount = {expensesArray[1].amount} 
      />
      <ExpenseDateImplementation date = {expenseDate} title = {expenseTitle} amount ={expenseAmount} />

    </div>
    
  );
}

export default App;
