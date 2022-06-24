import React from 'react';
import './App.css';

// import Counter from './components/functional/Counter';
// import UpdateState from './components/state/UpdateState';
// import Props from './components/props/Props';
import Lifecycle from './components/lifecycle/Lifecycle';

const App = () => {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <UpdateState copyright={2022}/> */}
      {/* <Props /> */}
      <Lifecycle />
    </div>
  );
};

export default App;
