import React from 'react';
import { useState } from 'react';
import Child from './Child';

// functional component
// const Props1 = (props) => {

//   const [count,setCount] = useState(0);

//   return (
//     <h1>Hello</h1>
//   );
// }

// class-based component
const Props = class extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world',
      count: 15
    };
  }

  render() {
    return (
      <div className="props">
        <h1>This is the Props Component</h1>
        <Child message={this.state.message} count={this.state.count}>
          <p>Happy Birthday!</p>
        </Child>
      </div>
    );
  }
};

export default Props;
