import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItems.css';

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);   
  console.log('ExpenseItem is called')

  const clickHandler = () => {
    setTitle('updated!');
    console.log(title);

  };

   return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'> 
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* point the eventHandler function as onClick = {clickHandler} do not call it by writing it as onClick = {clickHandler()} as it means the function will be invoked while parsing. */}
      <button onClick={clickHandler}>Change Title</button>   
    </Card>
  );
}

export default ExpenseItems;
