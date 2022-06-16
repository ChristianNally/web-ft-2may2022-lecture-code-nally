import {useState, useEffect} from 'react';
import axios from 'axios';

const Counter = (props) => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([
    {
      "id": 111,
      "name": "monkeyfuzz"
      },
  ]);

  console.log('Counter is being rendered.');

  // useEffect(() => {
  //   // some side effect that needs to be run every render.
  // }); // the callback is called for every render

  useEffect(() => {
    // call for data from an external API

    const options = {
      url: 'https://my-json-server.typicode.com/andydlindsay/chef-andy/ingredients',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    
    axios(options)
      .then(response => {
        console.log('response.data:',response.data);
        setIngredients((prev) => {
          return [...prev, ...response.data];
        });
      });

  }, []);

  useEffect(() => {
    const intervalRef = setInterval( () => {
      console.log(`I am alive!`);
    }, 750 );
    return () => {
      clearInterval(intervalRef); // clean up on the way out the door
    };
  },[]); // the callback is called once and ONLY once after the initial render

  useEffect(() => {
    console.log('Count has been updated.');
    document.title = `You clicked ${count} times.`;
  },[count]); // the callback is called ONLY when count updates






  return (
  <div>
    <h3>Count: { count }</h3>
    <button
      onClick={() => setCount(count + 1)}
    >Increment</button>
    <input
      value={name}
      onChange={(event) => {setName(event.target.value)}}
    />
    {ingredients.map((item, index) => {
      return (
        <p key={index}>{item.name}</p>
      );
    })}
  </div>
  );
};

export default Counter;
