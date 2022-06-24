import {React, useState, useEffect} from 'react';

const Counter = (props) => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  console.log('Counter is being rendered.');

  // useEffect(() => {
  //   console.log('Count has been updated.');
  //   document.title = `You clicked ${count} times.`;
  // },[count]); // the callback is called ONLY when count updates

  return (
  <div>
    <h1>HELLO</h1>
  </div>
  );
};

export default Counter;
