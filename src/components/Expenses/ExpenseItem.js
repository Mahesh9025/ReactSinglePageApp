  
// import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  console.log('Expensive Item evaluated by React');
  // const clickHandeler = () => {
  //   setTitle('Updated!');
  //   console.log(title)
  // };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandeler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;