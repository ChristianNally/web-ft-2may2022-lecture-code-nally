import './App.css';
import Counter from './components/Counter';
import {useState} from 'react';

function App() {

  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <h2>This App will manage side-effects</h2>
      <div>
        <input
          type="checkbox"
          onChange={() => {setChecked(!checked)}}
        />
      </div>
      { checked && <Counter/> }
    </div>
  );
}

export default App;
